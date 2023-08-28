import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

export default function Loading() {
  return (
    <div className="v-center">
      <Spin indicator={antIcon} />
    </div>
  );
}
