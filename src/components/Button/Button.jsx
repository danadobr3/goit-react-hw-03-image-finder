import cssbtn from './Button.module.css';

const Button = ({ onClick }) => (
  <button className={cssbtn.Button} onClick={onClick}>
    Load more
  </button>
);

export default Button;
