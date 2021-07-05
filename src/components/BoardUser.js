import React, { useEffect, useState } from 'react';
import UserService from '../service/UserService';
import APIUtils from '../util/APIUtils';

const BoardUser = () => {

    const [content, setContent] = useState("");
  
    useEffect(() => {
      // UserService.getUserBoard()
      APIUtils.getUserBoard()
      .then((res) => {
          setContent(res.data);
        },
        (error) => {
          const _content =
            (error.res &&
              error.res.data &&
              error.res.data.message) ||
            error.message ||
            error.toString();
  
          setContent(_content);
        }
      );
    }, []);
  
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    );
};

export default BoardUser;