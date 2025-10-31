import React, { useState } from 'react';
import { Form, Input, Button, Typography, Alert, Card } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';

const { Title } = Typography;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [loginError, setLoginError] = useState('');

  const onFinish = (values) => {
    if (values.username === 'admin' && values.password === 'secret123') {
      setUsername(values.username);
      setIsLoggedIn(true);
    } else {
      setLoginError('Неверные учетные данные! Попробуйте снова.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div
        style={{
          maxWidth: 500,
          margin: '80px auto',
          padding: '30px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 25,
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        data-testid="logged-in-screen"
      >
        <Card 
          style={{ 
            width: '100%', 
            borderRadius: 20,
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: 'none'
          }}
          bodyStyle={{ padding: '40px' }}
        >
          <Title level={2} style={{ 
            color: '#2c3e50',
            marginBottom: 10,
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🎉 Добро пожаловать!
          </Title>
          <p style={{ fontSize: '18px', color: '#5a6c7d', marginBottom: 30 }}>
            Рады видеть вас снова, <strong style={{ color: '#667eea' }}>{username}</strong>
          </p>
          <Button
            id="logout-button"
            type="primary"
            danger
            onClick={handleLogout}
            size="large"
            style={{
              borderRadius: 12,
              padding: '0 30px',
              height: 45,
              fontSize: '16px',
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
              border: 'none'
            }}
          >
            🔒 Выйти из системы
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ 
      maxWidth: 500, 
      margin: '60px auto', 
      padding: '30px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 25,
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Card 
        style={{ 
          width: '100%', 
          borderRadius: 20,
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          border: 'none'
        }}
        bodyStyle={{ padding: '40px 30px' }}
      >
        <Title level={2} style={{ 
          textAlign: 'center', 
          color: '#2c3e50',
          marginBottom: 30,
          fontWeight: 600,
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🔐 Авторизация
        </Title>
        {loginError && (
          <Alert
            id="login-error-message"
            message={loginError}
            type="error"
            showIcon
            style={{ 
              marginBottom: 25, 
              borderRadius: 10,
              border: 'none'
            }}
          />
        )}
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <Form.Item
            label={<span style={{ fontWeight: 500, color: '#2c3e50' }}>Имя пользователя</span>}
            name="username"
            rules={[{ required: true, message: 'Пожалуйста, введите имя пользователя!' }]}
          >
            <Input
              id="username" 
              prefix={<UserOutlined style={{ color: '#667eea' }} />}
              placeholder="Введите ваш логин"
              style={{ 
                borderRadius: 10,
                padding: '10px 15px'
              }}
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontWeight: 500, color: '#2c3e50' }}>Пароль</span>}
            name="password"
            rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
          >
            <Input.Password
              id="password"
              prefix={<LockOutlined style={{ color: '#667eea' }} />}
              placeholder="Введите ваш пароль"
              style={{ 
                borderRadius: 10,
                padding: '10px 15px'
              }}
            />
          </Form.Item>

          <Form.Item style={{ marginTop: 30 }}>
            <Button
              id="login-button" 
              type="primary"
              htmlType="submit"
              block
              icon={<LoginOutlined />}
              style={{
                height: 50,
                borderRadius: 12,
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                border: 'none',
                fontSize: '16px',
                fontWeight: 600
              }}
            >
              Войти в систему
            </Button>
          </Form.Item>
        </Form>
        
        <div style={{ 
          marginTop: 25, 
          textAlign: 'center', 
          padding: '15px',
          background: '#f0f5ff',
          borderRadius: 10
        }}>
          <p style={{ margin: 0, color: '#5a6c7d' }}>
            <strong>Тестовые данные:</strong><br/>
            Логин: <code>admin</code> | Пароль: <code>secret123</code>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default App;