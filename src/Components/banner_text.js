const BannerText = ({classNames=''}) => {
  return (
    <div className={`flex justify-center mb-2 `}>
      <div className={`text-white bg-green-950 rounded-full text-center py-3 px-[100px] ${classNames} `}> Tell Us What Other Product You Are Lokking To Import ? </div>
    </div>
  )
}
export default BannerText