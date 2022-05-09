type Props = {
    children: React.ReactNode | React.ReactNode[];
};

export default (props: Props) => {
    return <div className={'container'}>{props.children}</div>;
};
