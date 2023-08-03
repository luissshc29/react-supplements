import classNames from 'classnames'
import styles from './Botao.module.scss'
import { Link } from 'react-router-dom'

interface Props {
	children: string
	to: string
	onClick?: () => void
	disabled?:boolean
}

export default function Botao({children, to, onClick, disabled = false}: Props) {

	return (
		<button
			onClick={onClick}
			className={classNames({
				[styles.botao]: true,
				[styles.botao__inativo]:disabled
			})}
			
		>
			<Link
				to={to}
				className={classNames({
					[styles.botao__link]: true,
					[styles.botao__link__inativo]:disabled
				})}
			>
				{children}
			</Link>
		</button>
	)
}
