2019/09/17
一、 根据路径 location.pathname 选择页面 Layout
    1、当路径等于 '/login' 时选用 简单布局
    2、当路径不等于 '/login' 是选用复杂布局
      function BasicLayout({children,location:{pathname}}) {
        if(pathname === '/login'){
          return (
            <div className={layout}>
              { children }
            </div>
          );
        }
        return (
          <div>
            <Left/>
            <Right>
              <Header/>
              <div className={main}>
                { children }
              </div>
            </Right>
          </div>
        );
      }
二、 创建顶层 Model app 负责管理登录状态
