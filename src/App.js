import style from './App-style.module.css';
import { Form } from './components/Form/Form';
import photo from './images/peregovornaya.jpg';

const App = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Форма бронирования переговорной</h1>
        <img src={photo} alt="Переговорная" className={style.photo} />
      </div>
      <Form />
    </div>
  );
};

export default App;
