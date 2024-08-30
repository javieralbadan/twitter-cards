import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export default function App() {
  const users = [
    {
      userName: 'javieralbadan',
      name: 'Javier Albadán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'mdo',
      name: 'Mark Otto',
      isFollowing: false
    }
  ];
  const formatUserName = (username) => `@${username}`;
  
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            formatUserName={formatUserName}
            name={name}
            initialIsFollowing={isFollowing}
          />
        )
      })}
    </section>
  )
}
