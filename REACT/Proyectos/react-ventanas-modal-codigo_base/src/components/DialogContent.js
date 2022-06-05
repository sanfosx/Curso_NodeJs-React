import react from "react";
import styled from "styled-components";

const DialogContent = ({
    children, 
    state, 
    changeStateDialog, 
    paddingDialog,
    positionDialog,
    titleDialog, 
    showHeaderDialog,
    showOverlayDialog,

}) => {

    return (

        <>
        {state &&
            <Overlay showOverlayDialog={showOverlayDialog} positionDialog={positionDialog}>
                <DialogContainer paddingDialog={paddingDialog}>
                    {showHeaderDialog &&
                        <DialogHeader>
                        <h3>{titleDialog}</h3>
                        </DialogHeader>
                    }
                    
                    <BtnCloseDialog onClick={() => {changeStateDialog(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </BtnCloseDialog>
                        {children}
                </DialogContainer>

            </Overlay>
        }
    </>

    )
};

export default DialogContent



const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.showOverlayDialog ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)'} ;

    display: flex;
	align-items: ${props => props.positionDialog ? props.positionDialog : 'center'};
	justify-content: center;
    padding: 20px;
`;

const DialogContainer = styled.div`
    width: 500px;
    min-height: 100px;
    position: relative;
    border-radius: 5px;
    top: 0;
    left: 0;
    background: #FFF;
    box-shadow: rgba(0,0,111, 0.2) 0px 7px 29px 8px;
    padding: ${props => props.paddingDialog ? props.paddingDialog : '20px'};
`;

const DialogHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E8E8E8;

    h3 {
		font-weight: 500;
		font-size: 16px;
		color: #1766dc;
    }

`;

const BtnCloseDialog = styled.div`
    position: absolute;
    background:none;
    top: 15px;
    right: 15px;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: 3s ease all;
    border-radius: 5px;
    color: #1766dc;

    &: hover{
        background: dimgray;
    }

    svg {
        width: 100%;
        height: 100%;
    }

`;