import React from 'react';
import Opt from './Ux.Option'
import Norm from './Ux.Normalize'
import Prop from './Ux.Prop'
import {Button, Col, Form, Row} from 'antd'
import Dg from './Ux.Debug'
import Immutable from 'immutable';

/**
 * 验证规则属性
 * message：校验文件
 * type: 可选（内建类型）
 * required：是否必填
 * len:字段长度
 * min:最小长度
 * max:最大长度
 * enum: 枚举类型
 * pattern:正则表达式校验
 * transform:校验前转换字段值
 * validator: 自定义校验
 * @method _uiDisplay
 * @private
 * @param row 显示行数据
 * **/
const _uiDisplay = (row = {}) => {
    const style = row.style ? row.style : {};
    if (1 === row.length) {
        const item = row[0];
        if (item.hidden) {
            if (item.field === "$button") {
                style.display = "none";
            }
        }
    }
    return style;
};
const _uiRow = (row) => {
    if (Array.prototype.isPrototypeOf(row)) {
        return row;
    } else {
        return row.items;
    }
};
/**
 * Jsx单字段的Render处理
 * @method jsxField
 * @param {React.PureComponent} reference React对应组件引用
 * @param item Form中的Item配置信息
 * @param render 专用render函数
 * @return {*}
 */
const jsxField = (reference, item = {}, render) => {
    Dg.ensureRender(render, item);
    item = Immutable.fromJS(item).toJS();
    const {form} = reference.props;
    const {getFieldDecorator} = form;
    return (
        <Form.Item {...Opt.optionFormItem(item.optionItem)}>
            {0 <= item.field.indexOf("$") ? (
                render(reference, item.optionJsx)
            ) : (
                getFieldDecorator(item.field, item.optionConfig)(
                    render(reference, item.optionJsx)
                ))}
        </Form.Item>
    )
};
/**
 * Jsx单行字段的Render处理
 * @method jsxFieldRow
 * @param {React.PureComponent} reference React对应组件引用
 * @param item
 * @param render
 * @return {*}
 */
const jsxFieldRow = (reference, item = {}, render) => {
    Dg.ensureRender(render, item);
    item = Immutable.fromJS(item).toJS();
    const {form} = reference.props;
    const {getFieldDecorator} = form;
    return (
        <Form.Item {...item.optionItem}>
            {getFieldDecorator(item.field, item.optionConfig)(
                render(reference, item.optionJsx))}
        </Form.Item>
    )
};
/**
 * 直接从资源文件路径读取数据信息
 * @method jsxPath
 * @param reference
 * @param keys
 */
const jsxPath = (reference = {}, ...keys) => {
    const data = Prop.fromPath.apply(this, [reference].concat(keys));
    return data ? data : false;
};
/**
 * 针对Form进行分行渲染专用方法，可按照Grid的布局进行渲染
 * @method uiFieldForm
 * @param {React.PureComponent} reference React对应组件引用
 * @param renders 每个字段不同的render方法
 * @param column 当前Form的列数量
 * @param values Form的初始化值
 * @return {*}
 */
const uiFieldForm = (reference = {}, renders = {}, column = 4, values = {}) => {
    // Fix Issue
    if (!values) values = {};
    const form = Norm.extractForm(reference);
    const ops = Norm.extractOp(reference);
    const hidden = Norm.extractHidden(reference);
    const span = 24 / column;
    const btnOpts = Opt.optionFormItem();
    btnOpts.label = ' ';
    btnOpts.colon = false;
    return (
        <Form layout="inline" className="page-form">
            {form.map((row, index) => (
                <Row key={`form-row-${index}`} style={_uiDisplay(row)}>
                    {_uiRow(row).map(item => {
                        // 初始化
                        if (values.hasOwnProperty(item.field)) {
                            if (!item.optionConfig) {
                                item.optionConfig = {};
                            }
                            item.optionConfig.initialValue = values[item.field];
                        }
                        // 渲染
                        return (
                            (item.hasOwnProperty("title")) ? (
                                <Col className="page-title" key={item.field}>
                                    {/** 只渲染Title **/}
                                    {item.title}
                                </Col>
                            ) : (
                                <Col span={item.span ? item.span : span} key={item.field}>
                                    {/** 渲染字段 **/}
                                    {jsxField(reference, item,
                                        renders[item.field] ? renders[item.field] : () => false)}
                                </Col>
                            )
                        )
                    })}
                </Row>
            ))}
            {ops ? (
                <Row style={{display: hidden.opVisible ? 'inline' : 'none'}}>
                    <Col span={span}>
                        <Form.Item {...btnOpts}>
                            {ops.map(op => <Button {...op}>{op.text}</Button>)}
                        </Form.Item>
                    </Col>
                </Row>
            ) : false}
        </Form>
    )
};
/**
 * @class Jsx
 * @description 字段专用输出函数
 */
export default {
    // 读取路径上
    jsxPath,
    // Field专用
    jsxField,
    // RowField专用
    jsxFieldRow,
    // Form专用
    uiFieldForm,
}
