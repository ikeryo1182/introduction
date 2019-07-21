import React from 'react'

interface Props {
    isOpen: boolean;
    onClick?: () => void;
}

const Comment: React.FC<Props> = (props) => {
    const { isOpen, onClick } = props;

    const handleClick = () => {
        if (onClick) onClick();
    }

    return (
        <div className="global-wrapper">
            {isOpen ?
                (<div className="input-wrapper">
                    <div className="input">
                    </div>
                </div>)
                : null}
            <div onClick={handleClick} className="comment-button">
                <span className="icon">{isOpen ? <img width={14} src="/static/assets/close.png"/> : <img width={14} src="/static/assets/open.png"/>}</span>
            </div>
            <style jsx>{`
                .global-wrapper {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    margin-left: -100%;
                }

                .input-wrapper {
                    width: 0px;
                    height: 0px;
                }
                .input {
                    animation: img-wrap 0.5s cubic-bezier(.4, 0, .2, 1) forwards;
                    position:relative;
                    right:165px;
                    bottom:310px;
                    background-color: blue;
                    width:200px;
                    height:300px;
                    transition:1s;
                    border-radius:5px;
                }
                @keyframes img-wrap {
                    0% {
                      opacity:0;
                    }
                    100% {
                      opacity:1;
                    }
                  }

                .comment-button {
                    cursor:pointer;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:35px;
                    height:35px;
                    background-color:blue;
                    border-radius: 30px;
                }

                .icon {
                    color:white;
                }
            `}</style>
        </div>
    )
}

export default Comment