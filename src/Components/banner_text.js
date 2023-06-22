const BannerText = ({classNames=''}) => {
  return (
    <div className={`flex justify-center mb-2 `}>
      <div className={`text-white mx-2 bg-green-950 rounded-full text-center py-3 px-[100px] whitespace-nowrap ${classNames} `}> Tell Us What Other Product You Are Lokking To Import ? </div>
    </div>
  )
}
export default BannerText