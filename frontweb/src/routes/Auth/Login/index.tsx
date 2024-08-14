import './styles.css';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Logo from '../../../assets/images/logo.png';
import ButtonIcon from '../../../components/ButtonIcon';
import { LoginDTO } from '../../../models/LoginDTO';
import * as authService from '../../../services/auth-service';

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginDTO>();

  function onSubmit(formData: LoginDTO) {
    authService
      .loginRequest(formData)
      .then(() => {
        navigate("/home");
      })
      .catch(() => {
        reset();
        toast.error("Email ou senha inválidos");
      });
  }
  return (
    <div className="base-card login-card">
      <div className="login-card-img-container">
        <img src={Logo} alt="" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.username ? "is-invalid" : " "
            }`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>

        <div className="mb-2">
          <input
            {...register("password", {
              required: "Campo obrigatório",
            })}
            type="password"
            className={`form-control base-input ${
              errors.password ? "is-invalid" : " "
            }`}
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
      </form>
    </div>
  );
}
