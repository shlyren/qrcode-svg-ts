declare module "qrcode-svg-ts" {
    type QRCodeSVGCallBack = (error:any, result:any) => void
    type QRCodeSVGOptions = QRCodeSVGOption | string
    
    interface QRCodeSVGOption {
        /**
         * 二维码内容
         */
        content: string
        /**
         * 二维码边距默认为0
         */
        padding?: number
        /**
         * 二维码宽度
         */
        width?: number
        /**
         * 二维码高度
         */
        height?: number
        /**
         * 二维码颜色 默认黑色
         */
        color?: string
        /**
         * 二维码背景色 默认白色
         */
        background?: string
        /**
         * 容错级别 默认 H
         */
        ecl?: 'L'|'M'|'H'|'Q'
        /**
         * 将模块（正方形）连接成一个形状，加入 SVGpath元素，推荐用于 Web 和响应式使用，默认值：true
         */
        join?: boolean
        /**
         * 创建一个正方形作为图案，然后填充画布，默认值：false，请参见下面的输出示例
         */
        predefined?: boolean
        /**
         * 应用缩进和新行，默认：true
         */
        pretty?: boolean
        /**
         * 交换 X 和 Y 模块，仅当您对某些 QR 阅读器有问题时，默认：false
         */
        swap?: boolean
        /**
         * 在 SVG 文档之前添加 XML 声明，即<?xml version="1.0" standalone="yes"?>，默认值：true
         */
        xmlDeclaration?: boolean
        /**
         * 包装元素，默认：svg，
         *  - svgwidth: 使用和属性填充 SVG 文档中的正方形height，建议在二维码为静态（精确大小）的情况下转换为光栅图像或 PDF
         *  - svg-viewbox: 使用属性填充 SVG 文档中的viewBox正方形，推荐用于响应式网页
         *  - g: 在元素中放置正方形g，当您需要在单个 SVG 文档中放置多个 QR 码时很有用
         *  - none: 没有包装
         */
        container?: 'svg' | 'svg-viewbox' | 'g' | 'none'
    }

    export class QRCodeSVG {
        constructor(opt?: QRCodeSVGOptions);
        /**
         * 获取svg文件
         */
        svg(): string
        /**
         * 转换为 data:image/svg+xml 格式
         * 可以直接使用 img 标签展示
         */
        toDataURL(): string
        /**
         * 保存svg文件
         * @param file 文件保存的路径 
         * @param callback 保存的结果
         */
        save(file: string, callback: QRCodeSVGCallBack): void
    }

    export default QRCodeSVG;
}