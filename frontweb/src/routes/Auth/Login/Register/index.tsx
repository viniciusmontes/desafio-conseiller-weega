import "./styles.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginDTO } from "../../../../models/LoginDTO";
import * as authService from "../../../../services//auth-service";
import ButtonIcon from "../../../../components/ButtonIcon";
import { Link } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginDTO>();

  function onSubmit(formData: LoginDTO) {
    authService
      .registerRequest(formData)
      .then(() => {
        navigate("/");
        toast.success("Usuário criado com sucesso!");
      })
      .catch(() => {
        reset();
        toast.error("Erro ao criar usuário");
      });
  }

  return (
    <div className="register-container">
      <h1>Crie um novo usuário!</h1>
      <div className="base-card login-card">
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
                minLength: {
                  value: 6,
                  message: "Senha deve ter no mínimo 6 caracteres",
                },
                maxLength: {
                  value: 8,
                  message: "Senha deve ter no máximo 8 caracteres",
                },
              })}
              type="password"
              className={`form-control base-input ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Senha"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>

          <div className="mb-4">
            <select
              {...register("genre", { required: "Campo obrigatório" })}
              className={`form-control base-input ${
                errors.genre ? "is-invalid" : ""
              }`}
            >
              <option value="">Selecione o gênero</option>
              <option value="MALE">Masculino</option>
              <option value="FEMALE">Feminino</option>
            </select>
            <div className="invalid-feedback d-block">
              {errors.genre?.message}
            </div>
          </div>

          <div className="register-submit">
            <ButtonIcon text="Registrar" />
          </div>
          <div className="register-submit-button-back">
            <Link to={"/"}>
              <ButtonIcon text="Voltar" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
