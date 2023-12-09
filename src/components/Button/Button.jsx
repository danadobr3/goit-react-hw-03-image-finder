import cssbtn from './Button.module.css'


const Button = ({ onClick }) => {
  return (
    <button className={cssbtn.Button} onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
