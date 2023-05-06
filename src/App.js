import TextArea from 'antd/es/input/TextArea';
import style from './App-style.module.css';
import { Button, DatePicker, Form, Select } from 'antd';
import { layout, tailLayoutBtn, tailLayoutMobile } from './utils/settingsForm';
import photo from './images/peregovornaya.jpg'
import { useEffect, useState } from 'react';
const { Option } = Select;

const App = () => {
  const [tailLayout, setTailLayout] = useState(tailLayoutBtn);
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const newTailLayout = isMobile
        ? tailLayoutMobile
        : tailLayoutBtn;
      setTailLayout(newTailLayout);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onFinish = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Форма бронирования переговорной</h1>
        <img src={photo} alt='Переговорная' className={style.photo}/>
      </div>
      
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        className={style.form}
      >
        <Form.Item
          name="tower"
          label="Башня"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Выберите башню" allowClear>
            <Option value="А">А</Option>
            <Option value="Б">Б</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="floor"
          label="Этаж"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Выберите этаж" allowClear>
            {Array.from({ length: 25 }, (_, i) => (
              <Option key={i + 3} value={i + 3}>
                {i + 3}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="conference"
          label="Переговорка"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Выберите переговорку" allowClear>
            {Array.from({ length: 10 }, (_, i) => (
              <Option key={i + 1} value={i + 1}>
                {i + 1}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="date"
          label="Дата и время"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <RangePicker
            showTime={{
              format: 'HH:mm',
            }}
            format="YYYY-MM-DD HH:mm"
          />
        </Form.Item>
        <Form.Item name="comment" label="Комментарий">
          <TextArea placeholder="Введите комментарий" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" className={style.btn}>
            Отправить
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Очистить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
