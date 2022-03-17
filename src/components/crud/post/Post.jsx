import './Post.css';
import { Link } from 'react-router-dom';
import { Navbar } from '../../navbar/Navbar';
import { useForm } from 'react-hook-form';
export default function Post() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const addPedido = (dados) => console.log(dados);
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
									>
										<option value='Origem'>Escolha Seu Destino</option>
										<option value='sao-paulo'>São Paulo</option>
										<option value='rio-de-janeiro'>Rio de Janeiro</option>
										<option value='aracaju'>Aracaju</option>
										<option value='curitiba'>Curitiba</option>
										<option value='dubai'>Dubai</option>
										<option value='florianópolis'>Florianópolis</option>
										<option value='fortaleza'>Fortaleza</option>
										<option value='joao-pessoa'>João Pessoa</option>
										<option value='lisboa'>Lisboa</option>
										<option value='maceio'>Maceió</option>
										<option value='natal'>Natal</option>
										<option value='orlando'>Orlando</option>
										<option value='salvador'>Salvador</option>
									</select>
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
									/>
								</div>
								<div className='post__form_fields'>
									<label htmlFor='email' className='post__form-label'>
										Email{' '}
									</label>
									<input
										type='email'
										id='email'
										name='email'
										{...register('email')}
										className='post__form-input'
										placeholder='email@gmail.com'
									/>
								</div>
								<div className='post__form_fields'>
									<label htmlFor='data' className='post__form-label'>
										Data{' '}
									</label>
									<input
										type='text'
										id='data'
										{...register('data')}
										className='post__form-input'
										placeholder='YYYY-MM-DD'
									/>
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
