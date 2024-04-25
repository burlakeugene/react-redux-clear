type TObject = Record<string, any>;

type TOptions = {
  data: Record<string, any>;
  api: TObject;
  url?: string;
  needAuth?: boolean;
  needCatcher?: boolean;
  responseParse?: boolean;
  method?: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH' | 'UPDATE';
  additionalHeaders?: Record<string, string>;
};

const request = (options: TOptions) => {
  const {
    data,
    api,
    url = '',
    needAuth = true,
    needCatcher = true,
    method = 'GET',
    additionalHeaders = {},
    responseParse = true,
  } = options;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...additionalHeaders,
  };

  if (needAuth) {
    headers.Authorization = api.getState()?.auth?.token;
  }

  const returnerData = (response, callback) => {
    if (response?.json && responseParse) {
      response.json().then((data) => callback(data));

      return;
    }

    callback(response);
  };

  return new Promise((resolve, reject) => {
    const fetchUrl = new URL(url);

    const fetchOptions: TObject = {
      method,
      headers,
    };

    if (method === 'GET') {
      Object.keys(data).forEach((key) =>
        fetchUrl.searchParams.append(key, data[key])
      );
    } else {
      fetchOptions.body = JSON.stringify(data);
    }

    fetch(fetchUrl, fetchOptions)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }

        returnerData(response, resolve);
      })
      .catch((response) => {
        if (needCatcher) {
          console.error(response);
        }

        if (needAuth && response.status === 401) {
          console.error('Auth:', response);
        }

        returnerData(response, reject);
      });
  });
};

export default request;


// const clearReports = createAsyncThunk<any, {reportName: EReportName}>(
//   'reports/clear',
//   (data, api) => {
//     return request({
//       data,
//       api,
//       url: '/reports/tasks',
//       method: 'DELETE',
//     });
//   },
// );