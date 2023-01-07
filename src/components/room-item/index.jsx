import { memo, useRef, useState } from "react";
import { ItemWrapper } from "./style";
import PropTypes from 'prop-types'
import { Rate } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { Carousel } from 'antd';
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/indicator";
import classNames from "classnames";
const RoomItem = memo((props) => {
    const { itemData, itemWidtch = "25%" } = props
    const [currentindex, setcurrentindex] = useState(0);
    const CarouselRef = useRef()
    // 没有轮播图的展示样式
    const pictureElement = (
        <div className="cover">
            <img src={itemData.picture_url} />
        </div>
    )
    // 对点击事件的处理
    function BtnClickHandl(state) {
        if (state) {
            CarouselRef.current.prev()
            let newindex = currentindex - 1
            const length = itemData.picture_urls.length
            if (newindex < 0) newindex = length - 1
            setcurrentindex(newindex)
        } else {
            CarouselRef.current.next()
            let newindex = currentindex + 1
            const length = itemData.picture_urls.length
            if (newindex > length - 1) newindex = 0
            setcurrentindex(newindex)
        }
    }

    // 有轮播图的展示
    const sliderElement = (
        <div className="slide">
            <div className="control">
                <div className="btn left" onClick={(e) => {
                    BtnClickHandl(true)
                }}>
                    <IconArrowLeft width="30" height="30" />
                </div>
                <div className="btn right" onClick={() => {
                    BtnClickHandl(false)
                }}>
                    <IconArrowRight width="30" height="30" />
                </div>
            </div>
            <div className='indicator'>
                <Indicator currentindex={currentindex}>
                    {
                        itemData?.picture_urls?.map((item, index) => {
                            return (
                                <div className="item" key={item}>
                                    <span className={classNames("dot", { active: currentindex === index })}></span>
                                </div>
                            )
                        })
                    }
                </Indicator>
            </div>
            <Carousel ref={CarouselRef} dots={false}>
                {
                    itemData?.picture_urls?.map((item) => {
                        return (
                            <div className="cover" key={item}>
                                <img src={item} />
                            </div>
                        )
                    })
                }
            </Carousel>


            <div>

            </div>
        </div>
    )

    return (
        <ItemWrapper
            itemWidtch={itemWidtch}
            verifyColor={itemData?.verify_info?.text_color || "#39576a"}
        >
            <div className="iner">

                {!itemData.picture_urls ? pictureElement : sliderElement}



                <div className="deic">
                    {

                        itemData.verify_info.messages.join('·')
                    }
                </div>
                <div className="name">{itemData.name} </div>
                <div className="price">￥{itemData.price}/晚</div>
                <div className="bottom">
                    <div>
                        <Rate
                            character={<StarFilled />}
                            allowHalf

                            style={{
                                fontSize: "12px",
                                color: "#035d5d",
                                marginRight: "-1px"
                            }}
                            defaultValue={itemData.star_rating}
                        />
                    </div>

                    <div>
                        <span className="count">{itemData?.reviews_count}</span>
                        {
                            itemData?.bottom_info && <span className="extra">{itemData?.bottom_info?.content}</span>
                        }
                    </div>



                </div>

            </div>

        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem