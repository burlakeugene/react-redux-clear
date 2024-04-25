import React from 'react';

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Новый прототип космического корабля успешно протестирован',
        },
        {
          id: 2,
          title:
            'Искусственный интеллект обнаружил новый вид микробов на Марсе',
        },
        {
          id: 3,
          title: 'Запущена новая космическая миссия к Юпитеру',
        },
      ]);
    }, 1000);
  });
};

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      list: [],
    };
  }

  componentDidMount() {
    fetchData().then((list) => {
      this.setState({ list });
    });

    if(this.state.search){
      this.inputRef.value = this.state.search;
    }

    this.inputRef.addEventListener('input', (event) => {
      this.setState({
        search: event.target.value,
      });
    });
  }

  render() {
    const list = this.state.list.filter((item) => {
      return (
        item.title.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0
      );
    });

    return (
      <React.Fragment>
        <input
          type="text"
          ref={(input) => {
            this.inputRef = input;
          }}
        />
        {list.map((item) => {
          return <div>{item.title}</div>;
        })}
      </React.Fragment>
    );
  }
}
