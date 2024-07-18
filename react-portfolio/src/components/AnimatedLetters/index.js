import './index.scss';

const AnimatedLetters = ({letterClass, strArray, index}) => {
    return (
        <div className="animated-letters">
            {strArray.map((str, i) => (
                <span key={str + i} className={`${letterClass} _${i + index}`}>
                    {str === '' ? '\u00A0' : str}
                </span>
            ))}
        </div>
    )
}

export default AnimatedLetters