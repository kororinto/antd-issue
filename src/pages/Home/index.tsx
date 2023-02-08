import { Button } from 'antd';

interface HomeProps {}

const Home: RFC<HomeProps> = () => {
  return (
    <div>
      <Button type="primary">ConfigProvider在按钮上是生效的，按钮颜色是 #006bfd</Button>
    </div>
  );
};

export default Home;
