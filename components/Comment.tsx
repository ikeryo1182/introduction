import React from 'react'

export interface CommentType {
    name: string;
    message: string;
}

interface Props {
    comment: CommentType
    isOpen: boolean | null;
    onClick?: () => void;
    onSubmit?: () => void;
    onChangeComment?: (comment: CommentType) => void;
}

const Comment: React.FC<Props> = (props) => {
    const { comment, isOpen, onClick, onSubmit, onChangeComment } = props;

    const handleClick = () => {
        if (onClick) onClick();
    }

    const handleChangeComment = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget

        if (onChangeComment) onChangeComment(Object.assign({}, comment, { [name]: value }))
    }

    const handleSubmit = () => {
        if(onSubmit) onSubmit();
    }

    return (
        <div className="global-wrapper">
            {isOpen ?
                (<div className="input-wrapper">
                    <div className="input">
                        <p className="input-message" >Please make a short comment about me or this page 😄</p>
                        <form id="form" onSubmit={handleSubmit} >
                            <p className="label-wrapper"><label>Name</label></p>
                            <p><input required name="name" onChange={handleChangeComment} defaultValue={comment.name}></input></p>
                            <p className="label-wrapper"><label>Message</label></p>
                            <p><textarea required name="message" onChange={handleChangeComment} defaultValue={comment.message}></textarea></p>
                        </form>
                        <div className="button-wrapper">
                            <button form="form" className="submit-button">OK</button>
                        </div>
                    </div>
                </div>)
                : null}
            <div onClick={handleClick} className="comment-button">
                <span className="icon">{isOpen ? <img width={14} src="/static/assets/close.png" /> : <img width={14} src="/static/assets/open.png" />}</span>
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
                    bottom:390px;
                    background-color: blue;
                    width:160px;
                    height:340px;
                    transition:1s;
                    border-radius:5px;
                    padding:20px;
                }
                p {
                    margin:3px 0px;
                }
                .label-wrapper {
                    height:18px;
                }
                label {
                    font-size:12px;
                    color:white;
                }
                input,textarea {
                    outline: 0;
                }
                input {
                    width:150px;
                }
                textarea {
                    width:150px;
                    max-width:150px;
                    height:160px;
                    max-height:160px;
                }
                .input-message {
                    line-height:18px;
                    color:white;
                    margin-bottom:20px;
                }
                .button-wrapper {
                    display:flex;
                    justify-content: flex-end;
                }
                .submit-button {
                    cursor:pointer;
                    border-radius:5px;
                    width:50px;
                    height:30px;
                    outline:none;
                    color:white;
                    border:none;
                    background-color: rgba(0,0,0,0);
                }
                .submit-button:hover {
                    transition:0.3s;
                    background-color: rgba(255,255,255, 0.3);
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