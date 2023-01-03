import { memo } from "react";
import { ItemWrapper } from "./style";
import PropTypes from 'prop-types'
import { Rate } from 'antd';
import { StarFilled } from '@ant-design/icons';
const RoomItem = memo((props) => {
    const { itemData, itemWidtch = "25%" } = props
    return (
        <ItemWrapper
            itemWidtch={itemWidtch}
            verifyColor={itemData?.verify_info?.text_color || "#39576a"}
        >
            <div className="iner">
                <div className="cover">
                    <img src={itemData.picture_url} />
                </div>
                <div className="deic">
                    {
                        itemData.verify_info.messages.join('·')
                    }
                </div>
                <div className="name">{itemData.name} </div>
                <div className="price">￥{itemData.price}</div>
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