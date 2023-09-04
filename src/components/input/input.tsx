import { UseControllerProps, UseFormRegister, useController } from "react-hook-form";
import classes from './input.module.scss';
import { ComponentProps, ComponentPropsWithRef, ElementType } from "react";
import React from "react";

// type TInputType = 'text' | 'password' | 'email';

// type TInputProps = {
//     error: string;
// };

// Переделать на useRef:
// https://www.react-hook-form.com/faqs/#Howtosharerefusage
// https://ru.legacy.reactjs.org/docs/react-api.html#reactforwardref

// export const Input = (props: ComponentPropsWithRef<UseFormRegister<HTMLInputElement>> & TInputProps) => {
// export const Input = ({register, placeholder = '', type = 'text', rules = {}, name, error = ''}) => {
export const Input = ({ error = '', myRef, ...restProps }: any) => {
    // export const Input = React.forwardRef((props, ref) => {
    // console.log(props);

    return (
        <div className={ classes.inputWrapper }>
            <input
                className={classes.input}
                ref={ (e) => { myRef?.(e); } }
                { ...restProps }
            />
            <div className={ classes.inputError }>{ error }</div>
        </div>
    );
}