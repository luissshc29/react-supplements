import classNames from 'classnames'
import styles from './Rodape.module.scss'
import {AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub} from 'react-icons/ai'

export default function Rodape({fixado = false}: {fixado?: boolean}) {

	return (
		<footer className={classNames({
			[styles.rodape]: !fixado, 
			[styles.rodape__fixado]: fixado
		})}>
			<p>Feito por Luis Henrique |</p>
			<div className={styles.rodape__links}>
				<a href='https://www.instagram.com/luissshc_/'><AiOutlineInstagram /></a>
				<a href='https://www.linkedin.com/in/luis-henrique-6a7425165/'><AiOutlineLinkedin /></a>
				<a href='https://github.com/luissshc29'><AiOutlineGithub /></a>
			</div>
		</footer>
  )
}

