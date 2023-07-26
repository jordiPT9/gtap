import { Button as ButtonAntd } from 'antd';

export const Button = ({ children, color, ...props }) => {
    return (
        <ButtonAntd
            type="primary"
            style={{ backgroundColor: color, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
            {...props}
        >
            {children}
        </ButtonAntd>
    )
}