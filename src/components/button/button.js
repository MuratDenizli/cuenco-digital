import './index.css';

function Button(props) {
    return (
        <a style={{backgroundColor: props.isActive ? '#017143':'#01714276'}}>
            {props.name}
        </a>
    );
}

export default Button;