import {Spin} from 'antd';

interface LoaderProps {
    loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({loading}) => {
    if (!loading) return null;

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            zIndex: 1000
        }}>
            <Spin size="large"/>
        </div>
    );
}

export default Loader;
