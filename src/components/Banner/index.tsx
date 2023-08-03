import React from 'react'
import logo from 'assets/imagens/logo.png'
import styles from './Banner.module.scss'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaMagnifyingGlass} from 'react-icons/fa6'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

interface Props {
	busca: string
	setBusca: React.Dispatch<React.SetStateAction<string>>
	disabled?:boolean 
}


export default function Banner({busca, setBusca, disabled = false}: Props) {
  return (
	<header className={classNames({
		[styles.banner]: true,
		[styles.banner__inativo]: disabled
	})}>
		<Link to='/' className={styles.banner__link}>
			<div className={styles.banner__container__logo}>
				<img src={logo} className={styles.banner__logo} alt='logo'/>
				<h1 className={styles.banner__titulo}>React <span>Supplements</span></h1>
			</div>
		</Link>
		<div className={classNames({
			[styles.banner__container__input]: true,
			[styles.banner__container__input__inativo]: disabled
		})}>
			<input 
				placeholder='Qual produto você está buscando?' 
				className={styles.banner__input}
				onChange={(evento) => setBusca(evento.target.value)}
			/>
			<FaMagnifyingGlass className={styles.banner__input__icone}/>
		</div>
		<Link to='/carrinho' className={classNames({
			[styles.banner__carrinho]: true,
			[styles.banner__carrinho__inativo]: disabled
		})}>
			<AiOutlineShoppingCart className={styles.banner__carrinho__icone}/>
		</Link>
	</header>
  )
}
