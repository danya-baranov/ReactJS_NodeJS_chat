import React from 'react'
import { Button, Block } from 'components'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'

const success = false;

const RegisterForm = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (

        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат,вам нужно зарегестрироваться</p>
            </div>
            <Block>
                {!success ? (
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Item
                            validateStatus={
                                !touched.email ? "" : errors.email ? "error" : "success"
                            }
                            hasFeedback
                            help={!touched.email ? "" : errors.email}
                        >
                            <Input
                                id="email"
                                prefix={
                                    <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                                }
                                size="large"
                                placeholder="E-Mail"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={
                                !touched.fullName ? "" : errors.fullName ? "error" : "success"
                            }
                            hasFeedback
                            help={!touched.fullName ? "" : errors.fullName}>
                            <Input
                                id='fullName'
                                size='large'
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Ваше имя"
                                value={values.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={
                                !touched.password ? "" : errors.password ? "error" : "success"
                            }
                            hasFeedback
                            help={!touched.password ? "" : errors.password}
                        >
                            <Input
                                id='password'
                                size='large'
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item
                            validateStatus={
                                !touched.password_2 ? "" : errors.password_2 ? "error" : "success"
                            }
                            hasFeedback
                            help={!touched.password_2 ? "" : errors.password_2}>
                            <Input
                                id='password_2'
                                size='large'
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Повторите пароль"
                                value={values.password_2}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Form.Item>
                        <Form.Item>

                            <Button onClick={handleSubmit} type='primary' size='large'>зарегестрироваться</Button>
                        </Form.Item>
                        <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>

                    </Form>
                ) : (
                        <div className="auth__success-block">
                            <div>
                                <Icon type="info-circle" theme="twoTone" />
                            </div>
                            <h2>Подтвердите свой аккаунт</h2>
                            <p>
                                На Вашу почту отправлено письмо с ссылкой на подтверждение
                                аккаунта.
                        </p>
                        </div>
                    )}
            </Block>
        </div>
    )
}

export default RegisterForm
