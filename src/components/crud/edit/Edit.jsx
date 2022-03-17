import './Edit.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../../navbar/Navbar';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../../context/authContext';
import axios from 'axios';
import { useEffect } from 'react';

const validationPost = yup.object().shape({
	destino: yup.string().ensure().required(''),
	nome: yup.string().required('O campo Nome é obrigatorio'),
	email: yup
		.string()
		.email('email invalido')
		.required('O campo email é obrigatorio'),
	data: yup
		.string()
		.required('O campo Data é obrigatorio')
		.max(10, 'Insira uma Correte YYYY-MM-DD'),
});
export default function Edit() {
	const { user } = useAuth();
	console.log(user);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(validationPost),
	});

	const { id } = useParams();

	useEffect(() => {
		axios.get(`http://localhost:8080/pedido/${id}`).then((res) => {
			reset(res.data);
		});
	}, []);

	const addPedido = (dados) => {
		console.log(dados);
		axios
			.put(`http://localhost:8080/pedido/${id}`, dados)
			.then(() => {
				console.log('Deu Tudo Certo');
				navigate('/user/pedidos');
			})
			.catch(() => {
				console.log('Deu Errado');
			});
	};
	return (
		<>
			<Navbar />
			<div className='post'>
				<div className='post__container'>
					<Link to='/user/pedidos' className='post__btn-nav btn'>
						<i className='fa-solid fa-angle-left'></i> voltar para seus pedidos
					</Link>

					<div className='post__container-form'>
						<div className='post__card'>
							<header className='post__card-header'>
								<h1>Novo Pedido</h1>
							</header>

							<form className='post__form' onSubmit={handleSubmit(addPedido)}>
								<div className='post__form_fields'>
									<label htmlFor='destino' className='post__form-label'>
										Destino{' '}
									</label>
									<select
										type='text'
										id='destino'
										name='destino'
										{...register('destino')}
										className='post__form-input-select'
										placeholder='Seu'
									>
										<option value='Origem'>Escolha Seu Destino</option>
										<option value='São Paulo'>São Paulo</option>
										<option value='Rio de Janeiro'>Rio de Janeiro</option>
										<option value='Aracaju'>Aracaju</option>
										<option value='Curitiba'>Curitiba</option>
										<option value='Dubai'>Dubai</option>
										<option value='Florianópolis'>Florianópolis</option>
										<option value='Fortaleza'>Fortaleza</option>
										<option value='João Pessoa'>João Pessoa</option>
										<option value='Lisboa'>Lisboa</option>
										<option value='Maceió'>Maceió</option>
										<option value='Natal'>Natal</option>
										<option value='Orlando'>Orlando</option>
										<option value='Salvador'>Salvador</option>
									</select>
									<p className='post__error-message'>
										{errors.destino?.message}
									</p>
								</div>
								<div className='post__form_fields'>
									<label htmlFor='nome' className='post__form-label'>
										Nome{' '}
									</label>
									<input
										type='text'
										id='nome'
										name='nome'
										{...register('nome')}
										className='post__form-input'
										placeholder='Biro Biro'
										// value={user.displayName || user.email}
									/>
									<p className='post__error-message'>{errors.nome?.message}</p>
								</div>
								<div className='post__form_fields'>
									<label htmlFor='email' className='post__form-label'>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										{...register('email')}
										className='post__form-input'
										placeholder='email@gmail.com'
										// value={user.email}
									/>
									<p className='post__error-message'>{errors.email?.message}</p>
								</div>
								<div className='post__form_fields'>
									<label htmlFor='data' className='post__form-label'>
										Data
									</label>
									<input
										type='text'
										id='data'
										{...register('data')}
										className='post__form-input'
										placeholder='YYYY-MM-DD'
									/>
									<p className='post__error-message'>{errors.data?.message}</p>
								</div>

								<button className='post__form-btn btn'>
									<i className='fa-solid fa-paper-plane'></i> Enviar
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
