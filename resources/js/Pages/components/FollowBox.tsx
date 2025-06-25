import FollowList from 'Pages/common/FollowList';
import React from 'react'

const FollowBox = ({onClick}:{onClick:()=>void;}) => {
  return (
    <FollowList onClick={onClick} title="フォロー"/>
  )
}

export default FollowBox
