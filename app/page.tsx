import css from './Home.module.css';

export default function Home() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to NoteHub</h1>
        <p className={css.description}>
          NoteHub is a simple and efficient application designed for managing
          personal notes. It helps keep your thoughts organized and accessible
          in one place, whether you are at home or on the go.
        </p>
        <p className={css.description}>
          The app provides a clean interface for writing, editing, and browsing
          notes. With support for keyword search and structured organization,
          NoteHub offers a streamlined experience for anyone who values clarity
          and productivity.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa magni
          sint architecto nisi perferendis aperiam numquam veniam nam sunt
          consectetur vero ipsam dolorem voluptate ab repellendus accusamus,
          alias, sed explicabo!
        </p>
      </div>
    </main>
  );
}
