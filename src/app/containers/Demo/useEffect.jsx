class RenderUser extends Component {
  constructor(props) {
    this.state = {
      user: null,
    };
  }
  fetchUser(id) {
    fetchUser(id).then((user) => {
      this.setState({
        user,
      });
    });
  }
  componentDidMount() {
    this.fetchUser(this.props.id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchUser(this.props.id);
    }
  }
  render() {
    let { user } = this.state;
    return user?.name ? <div>{user.name}</div> : null;
  }
}


const RenderUser = (props) => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    fetchUser(props.id).then((user) => {
      setUser(user);
    });
  }, [props.id]);
  return user?.name ? <div>{user.name}</div> : null;
};
