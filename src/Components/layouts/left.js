import { connect } from 'dva';

const LeftLayout = ({ msg }) => (<div> { msg } </div>);

function mapStateToProps(){
  const msg = '我是左侧';
  return { msg }
}

export default connect(mapStateToProps)(LeftLayout)
