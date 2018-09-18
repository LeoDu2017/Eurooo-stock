import { connect } from 'dva';
import { Col,Row,Button} from 'antd';
import styles from 'Styles/login.less';
const LoginPage = ({ currentIndex }) => (
  <div className={styles.main}>
    <Row className={styles.header}>
      <Col className={styles.left}>
        <img alt="Eurooo-stock" src={require('Assets/euroooLogo.png')}/>
      </Col>
      <Button
        htmlType="button"
        className={currentIndex === 1 ? `${styles.btn} ${styles.active}` : styles.btn}>
        {/*{intl.get('LOGIN')}*/}
        登录
      </Button>
    </Row>
  </div>
);

function mapStateToProps(state){
  const { currentIndex } = state.login;

  return { currentIndex }
}

export default connect(mapStateToProps)(LoginPage)
