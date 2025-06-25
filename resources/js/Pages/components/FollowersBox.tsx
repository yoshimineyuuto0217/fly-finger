import FollowList from "Pages/common/FollowList";

const FollowersBox = ({onClick}:{onClick:()=>void;}) => {
  return (
    <FollowList onClick={onClick} title="フォロワー"/>
  )
}

export default FollowersBox
