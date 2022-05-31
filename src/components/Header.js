import logo from '../images/logo.svg';

export default function Header({isLoggedIn, user, onClick, authName}) {
	console.log(user.email);
	return (
		<header className='header'>
			<img className='header__logo' src={logo} alt='website logo' />
			<div className='header__signup'>
				<span className={isLoggedIn ? 'header__auth-user-visible' : 'header__auth-user'}>{user.email}</span>
				<a className='header__auth-link' onClick={onClick}>
					{authName}
				</a>
			</div>
		</header>
	);
}
