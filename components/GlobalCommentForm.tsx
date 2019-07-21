import React from 'react'
import Comment from '../model/Comment';
import CommentStep from '../enum/CommentStep';

interface Props {
    comment: Comment
    commentStep: CommentStep;
    onClick?: () => void;
    onSubmit?: () => void;
    onChangeComment?: (comment: Comment) => void;
}

const GlobalCommentForm: React.FC<Props> = (props) => {
    const { comment, commentStep, onClick, onSubmit, onChangeComment } = props;

    const handleClick = () => {
        if (onClick) onClick();
    }

    const handleChangeComment = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget

        if (onChangeComment) onChangeComment(Object.assign({}, comment, { [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (onSubmit) onSubmit();
    }

    const resolveShapeClassName = () => {
        switch (commentStep) {
            case CommentStep.OPEN:
                return "vertical"
            case CommentStep.FINISHED:
                return "horizontal"
            default: ""
        }
    }

    return (
        <div className={`global-wrapper ${commentStep === CommentStep.FINISHED && "fadeout"}`}>
            {commentStep !== CommentStep.CLOSE &&
                <div className="input-wrapper">
                    <div className={`input ${resolveShapeClassName()}`}>
                        {commentStep === CommentStep.OPEN &&
                            <>
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
                            </>
                        }
                        {commentStep === CommentStep.FINISHED &&
                            <p className="thank-message">Thank you for commenting 🤲</p>
                        }
                    </div>
                </div>
            }
            {commentStep !== CommentStep.FINISHED &&
                <div onClick={handleClick} className="comment-button">
                    <span className="icon">{commentStep === CommentStep.OPEN ? <img width={14} src="/static/assets/close.png" /> : <img width={14} src="/static/assets/open.png" />}</span>
                </div>
            }
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
                .horizontal {
                    width:220px;
                    height:22px;
                    right:265px;
                    bottom:62px;
                }
                .fadeout {
                    animation: fadeout 0.5s cubic-bezier(.4, 0, .2, 1) 2s forwards;
                }
                .vertical {
                    width:160px;
                    height:340px;
                    right:165px;
                    bottom:390px;
                }
                .input {
                    animation: fadein 0.5s cubic-bezier(.4, 0, .2, 1) forwards;
                    position:relative;
                    background-color: blue;
                    transition:0.5s;
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
                    border-radius:2px;
                    border:none;
                    padding:2px;
                    width:150px;
                }
                textarea {
                    border:none;
                    border-radius:2px;
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
                .thank-message {
                    animation: delay 0.5s cubic-bezier(.4, 0, .2, 1) forwards;
                    line-height:18px;
                    color:white;
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

                @keyframes fadein {
                    0% {
                      opacity:0;
                    }
                    100% {
                      opacity:1;
                    }
                  }
                @keyframes fadeout {
                    0% {
                      opacity:1;
                    } 
                   100% {
                      opacity:0;
                    }
                  }

                @keyframes delay {
                    0% {
                      opacity:0;
                    }
                    70% {
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

export default GlobalCommentForm