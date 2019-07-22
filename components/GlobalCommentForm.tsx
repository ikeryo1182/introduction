import React from 'react'
import Comment from '../models/Comment';
import CommentStep from '../enums/CommentStep';

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
        <div className="global-wrapper">
            <div className="buttons">
                <a href="https://github.com/ikeryo1182" rel="noopener noreferrer" target="_blank" className="link-button github">
                    <span>Ｇ</span>
                </a>
                <a href="https://twitter.com/neer_chan" rel="noopener noreferrer" target="_blank" className="link-button twitter">
                    <span>Ｔ</span>
                </a>
                <a href="https://qiita.com/neer_chan" rel="noopener noreferrer" target="_blank" className="link-button qiita">
                    <span>Ｑ</span>
                </a>
                <a href="https://www.facebook.com/ryo.ikeura" rel="noopener noreferrer" target="_blank" className="link-button facebook">
                    <span>Ｆ</span>
                </a>
                <a href="https://blog.ikeryo1182.com/" rel="noopener noreferrer" target="_blank" className="link-button blog">
                    <span>Ｂ</span>
                </a>
                <div className={`${commentStep === CommentStep.FINISHED && "fadeout"}`}>
                    <div onClick={commentStep !== CommentStep.FINISHED ? handleClick : undefined} className="comment-button">
                        {commentStep === CommentStep.CLOSE ?
                            <img width={14} src="/static/assets/open.png" />
                            : <img width={14} src="/static/assets/close.png" />
                        }
                    </div>
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
                </div>
            </div>
            <style jsx>{`
                .global-wrapper {
                    position: fixed;
                    bottom: 20px;
                    right: 35%;
                    width:30%;
                    margin-left: -100%;
                    display:flex;
                    justify-content:space-evenly;
                    align-items:center;
                }
                @media screen and (max-width:780px) {
                    .global-wrapper {
                        right: 10%;
                        width:80%;
                    }
                }
                .buttons {
                    width:100%;
                    display:flex;
                    justify-content:space-evenly;
                    align-items:center;
                }
                .input-wrapper {
                    width: 0px;
                    height: 0px;
                }
                .horizontal {
                    width:225px;
                    height:22px;
                    right:230px;
                    bottom:112px;
                }
                .vertical {
                    width:225px;
                    height:230px;
                    right:230px;
                    bottom:320px;
                }
                .fadeout {
                    animation: fadeout 0.5s cubic-bezier(.4, 0, .2, 1) 2s forwards;
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
                    width:215px;
                }
                textarea {
                    border:none;
                    border-radius:2px;
                    width:215px;
                    max-width:215px;
                    height:70px;
                    max-height:70px;
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
                       pointer-events:none;
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
                  .comment-button,.link-button {
                    cursor:pointer;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    width:35px;
                    height:35px;
                    border-radius: 30px;
                  }
                .comment-button {
                    background-color:blue;
                }
                a {
                    text-decoration:none;
                }
                a.github {
                    background-color:black;
                }
                a.twitter {
                    background-color:#1DA1F2　;
                }
                a.qiita {
                    background-color:#55c500;
                }
                a.facebook {
                    background-color:#3C5A99;
                }
                a.blog {
                    background-color:brown;
                }
                a span {
                    font-weight:bold;
                    color:white;
                }
            `}</style>
        </div>
    )
}

export default GlobalCommentForm