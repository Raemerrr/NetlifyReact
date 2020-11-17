import React from 'react';

const MyName2 = ({name}) => {
    return(
        <div>
            안녕하세요! 제 이름은 <b>{name}</b> 입니다.
        </div>
    );
};

MyName2.defaultProps = {
    name : '기본 이름2'
}

export default MyName2;