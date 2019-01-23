const defineDict = {}
const typedefDict = {}

// THOST_TE_RESUME_TYPE
defineDict.THOST_TERT_RESTART = 0
defineDict.THOST_TERT_RESUME = 0
defineDict.THOST_TERT_QUICK = 0

// TFtdcTraderIDType是一个交易所交易员代码类型
typedefDict.TThostFtdcTraderIDType = 'string'

// TFtdcInvestorIDType是一个投资者代码类型
typedefDict.TThostFtdcInvestorIDType = 'string'

// TFtdcBrokerIDType是一个经纪公司代码类型
typedefDict.TThostFtdcBrokerIDType = 'string'

// TFtdcBrokerAbbrType是一个经纪公司简称类型
typedefDict.TThostFtdcBrokerAbbrType = 'string'

// TFtdcBrokerNameType是一个经纪公司名称类型
typedefDict.TThostFtdcBrokerNameType = 'string'

// TFtdcExchangeInstIDType是一个合约在交易所的代码类型
typedefDict.TThostFtdcExchangeInstIDType = 'string'

// TFtdcOrderRefType是一个报单引用类型
typedefDict.TThostFtdcOrderRefType = 'string'

// TFtdcParticipantIDType是一个会员代码类型
typedefDict.TThostFtdcParticipantIDType = 'string'

// TFtdcUserIDType是一个用户代码类型
typedefDict.TThostFtdcUserIDType = 'string'

// TFtdcPasswordType是一个密码类型
typedefDict.TThostFtdcPasswordType = 'string'

// TFtdcClientIDType是一个交易编码类型
typedefDict.TThostFtdcClientIDType = 'string'

// TFtdcInstrumentIDType是一个合约代码类型
typedefDict.TThostFtdcInstrumentIDType = 'string'

// TFtdcInstrumentCodeType是一个合约标识码类型
typedefDict.TThostFtdcInstrumentCodeType = 'string'

// TFtdcMarketIDType是一个市场代码类型
typedefDict.TThostFtdcMarketIDType = 'string'

// TFtdcProductNameType是一个产品名称类型
typedefDict.TThostFtdcProductNameType = 'string'

// TFtdcExchangeIDType是一个交易所代码类型
typedefDict.TThostFtdcExchangeIDType = 'string'

// TFtdcExchangeNameType是一个交易所名称类型
typedefDict.TThostFtdcExchangeNameType = 'string'

// TFtdcExchangeAbbrType是一个交易所简称类型
typedefDict.TThostFtdcExchangeAbbrType = 'string'

// TFtdcExchangeFlagType是一个交易所标志类型
typedefDict.TThostFtdcExchangeFlagType = 'string'

// TFtdcMacAddressType是一个Mac地址类型
typedefDict.TThostFtdcMacAddressType = 'string'

// TFtdcSystemIDType是一个系统编号类型
typedefDict.TThostFtdcSystemIDType = 'string'

// TFtdcExchangePropertyType是一个交易所属性类型
// 正常
defineDict.THOST_FTDC_EXP_Normal = '0'
// 根据成交生成报单
defineDict.THOST_FTDC_EXP_GenOrderByTrade = '1'

typedefDict.TThostFtdcExchangePropertyType = 'char'

// TFtdcDateType是一个日期类型
typedefDict.TThostFtdcDateType = 'string'

// TFtdcTimeType是一个时间类型
typedefDict.TThostFtdcTimeType = 'string'

// TFtdcLongTimeType是一个长时间类型
typedefDict.TThostFtdcLongTimeType = 'string'

// TFtdcInstrumentNameType是一个合约名称类型
typedefDict.TThostFtdcInstrumentNameType = 'string'

// TFtdcSettlementGroupIDType是一个结算组代码类型
typedefDict.TThostFtdcSettlementGroupIDType = 'string'

// TFtdcOrderSysIDType是一个报单编号类型
typedefDict.TThostFtdcOrderSysIDType = 'string'

// TFtdcTradeIDType是一个成交编号类型
typedefDict.TThostFtdcTradeIDType = 'string'

// TFtdcCommandTypeType是一个DB命令类型类型
typedefDict.TThostFtdcCommandTypeType = 'string'

// TFtdcIPAddressType是一个IP地址类型
typedefDict.TThostFtdcIPAddressType = 'string'

// TFtdcIPPortType是一个IP端口类型
typedefDict.TThostFtdcIPPortType = 'int'

// TFtdcProductInfoType是一个产品信息类型
typedefDict.TThostFtdcProductInfoType = 'string'

// TFtdcProtocolInfoType是一个协议信息类型
typedefDict.TThostFtdcProtocolInfoType = 'string'

// TFtdcBusinessUnitType是一个业务单元类型
typedefDict.TThostFtdcBusinessUnitType = 'string'

// TFtdcDepositSeqNoType是一个出入金流水号类型
typedefDict.TThostFtdcDepositSeqNoType = 'string'

// TFtdcIdentifiedCardNoType是一个证件号码类型
typedefDict.TThostFtdcIdentifiedCardNoType = 'string'

// TFtdcIdCardTypeType是一个证件类型类型
// 组织机构代码
defineDict.THOST_FTDC_ICT_EID = '0'
// 中国公民身份证
defineDict.THOST_FTDC_ICT_IDCard = '1'
// 军官证
defineDict.THOST_FTDC_ICT_OfficerIDCard = '2'
// 警官证
defineDict.THOST_FTDC_ICT_PoliceIDCard = '3'
// 士兵证
defineDict.THOST_FTDC_ICT_SoldierIDCard = '4'
// 户口簿
defineDict.THOST_FTDC_ICT_HouseholdRegister = '5'
// 护照
defineDict.THOST_FTDC_ICT_Passport = '6'
// 台胞证
defineDict.THOST_FTDC_ICT_TaiwanCompatriotIDCard = '7'
// 回乡证
defineDict.THOST_FTDC_ICT_HomeComingCard = '8'
// 营业执照号
defineDict.THOST_FTDC_ICT_LicenseNo = '9'
// 税务登记号/当地纳税ID
defineDict.THOST_FTDC_ICT_TaxNo = 'A'
// 港澳居民来往内地通行证
defineDict.THOST_FTDC_ICT_HMMainlandTravelPermit = 'B'
// 台湾居民来往大陆通行证
defineDict.THOST_FTDC_ICT_TwMainlandTravelPermit = 'C'
// 驾照
defineDict.THOST_FTDC_ICT_DrivingLicense = 'D'
// 当地社保ID
defineDict.THOST_FTDC_ICT_SocialID = 'F'
// 当地身份证
defineDict.THOST_FTDC_ICT_LocalID = 'G'
// 商业登记证
defineDict.THOST_FTDC_ICT_BusinessRegistration = 'H'
// 港澳永久性居民身份证
defineDict.THOST_FTDC_ICT_HKMCIDCard = 'I'
// 人行开户许可证
defineDict.THOST_FTDC_ICT_AccountsPermits = 'J'
// 其他证件
defineDict.THOST_FTDC_ICT_OtherCard = 'x'

typedefDict.TThostFtdcIdCardTypeType = 'char'

// TFtdcOrderLocalIDType是一个本地报单编号类型
typedefDict.TThostFtdcOrderLocalIDType = 'string'

// TFtdcUserNameType是一个用户名称类型
typedefDict.TThostFtdcUserNameType = 'string'

// TFtdcPartyNameType是一个参与人名称类型
typedefDict.TThostFtdcPartyNameType = 'string'

// TFtdcErrorMsgType是一个错误信息类型
typedefDict.TThostFtdcErrorMsgType = 'string'

// TFtdcFieldNameType是一个字段名类型
typedefDict.TThostFtdcFieldNameType = 'string'

// TFtdcFieldContentType是一个字段内容类型
typedefDict.TThostFtdcFieldContentType = 'string'

// TFtdcSystemNameType是一个系统名称类型
typedefDict.TThostFtdcSystemNameType = 'string'

// TFtdcContentType是一个消息正文类型
typedefDict.TThostFtdcContentType = 'string'

// TFtdcInvestorRangeType是一个投资者范围类型
// 所有
defineDict.THOST_FTDC_IR_All = '1'
// 投资者组
defineDict.THOST_FTDC_IR_Group = '2'
// 单一投资者
defineDict.THOST_FTDC_IR_Single = '3'

typedefDict.TThostFtdcInvestorRangeType = 'char'

// TFtdcDepartmentRangeType是一个投资者范围类型
// 所有
defineDict.THOST_FTDC_DR_All = '1'
// 组织架构
defineDict.THOST_FTDC_DR_Group = '2'
// 单一投资者
defineDict.THOST_FTDC_DR_Single = '3'

typedefDict.TThostFtdcDepartmentRangeType = 'char'

// TFtdcDataSyncStatusType是一个数据同步状态类型
// 未同步
defineDict.THOST_FTDC_DS_Asynchronous = '1'
// 同步中
defineDict.THOST_FTDC_DS_Synchronizing = '2'
// 已同步
defineDict.THOST_FTDC_DS_Synchronized = '3'

typedefDict.TThostFtdcDataSyncStatusType = 'char'

// TFtdcBrokerDataSyncStatusType是一个经纪公司数据同步状态类型
// 已同步
defineDict.THOST_FTDC_BDS_Synchronized = '1'
// 同步中
defineDict.THOST_FTDC_BDS_Synchronizing = '2'

typedefDict.TThostFtdcBrokerDataSyncStatusType = 'char'

// TFtdcExchangeConnectStatusType是一个交易所连接状态类型
// 没有任何连接
defineDict.THOST_FTDC_ECS_NoConnection = '1'
// 已经发出合约查询请求
defineDict.THOST_FTDC_ECS_QryInstrumentSent = '2'
// 已经获取信息
defineDict.THOST_FTDC_ECS_GotInformation = '9'

typedefDict.TThostFtdcExchangeConnectStatusType = 'char'

// TFtdcTraderConnectStatusType是一个交易所交易员连接状态类型
// 没有任何连接
defineDict.THOST_FTDC_TCS_NotConnected = '1'
// 已经连接
defineDict.THOST_FTDC_TCS_Connected = '2'
// 已经发出合约查询请求
defineDict.THOST_FTDC_TCS_QryInstrumentSent = '3'
// 订阅私有流
defineDict.THOST_FTDC_TCS_SubPrivateFlow = '4'

typedefDict.TThostFtdcTraderConnectStatusType = 'char'

// TFtdcFunctionCodeType是一个功能代码类型
// 数据异步化
defineDict.THOST_FTDC_FC_DataAsync = '1'
// 强制用户登出
defineDict.THOST_FTDC_FC_ForceUserLogout = '2'
// 变更管理用户口令
defineDict.THOST_FTDC_FC_UserPasswordUpdate = '3'
// 变更经纪公司口令
defineDict.THOST_FTDC_FC_BrokerPasswordUpdate = '4'
// 变更投资者口令
defineDict.THOST_FTDC_FC_InvestorPasswordUpdate = '5'
// 报单插入
defineDict.THOST_FTDC_FC_OrderInsert = '6'
// 报单操作
defineDict.THOST_FTDC_FC_OrderAction = '7'
// 同步系统数据
defineDict.THOST_FTDC_FC_SyncSystemData = '8'
// 同步经纪公司数据
defineDict.THOST_FTDC_FC_SyncBrokerData = '9'
// 批量同步经纪公司数据
defineDict.THOST_FTDC_FC_BachSyncBrokerData = 'A'
// 超级查询
defineDict.THOST_FTDC_FC_SuperQuery = 'B'
// 预埋报单插入
defineDict.THOST_FTDC_FC_ParkedOrderInsert = 'C'
// 预埋报单操作
defineDict.THOST_FTDC_FC_ParkedOrderAction = 'D'
// 同步动态令牌
defineDict.THOST_FTDC_FC_SyncOTP = 'E'
// 删除未知单
defineDict.THOST_FTDC_FC_DeleteOrder = 'F'

typedefDict.TThostFtdcFunctionCodeType = 'char'

// TFtdcBrokerFunctionCodeType是一个经纪公司功能代码类型
// 强制用户登出
defineDict.THOST_FTDC_BFC_ForceUserLogout = '1'
// 变更用户口令
defineDict.THOST_FTDC_BFC_UserPasswordUpdate = '2'
// 同步经纪公司数据
defineDict.THOST_FTDC_BFC_SyncBrokerData = '3'
// 批量同步经纪公司数据
defineDict.THOST_FTDC_BFC_BachSyncBrokerData = '4'
// 报单插入
defineDict.THOST_FTDC_BFC_OrderInsert = '5'
// 报单操作
defineDict.THOST_FTDC_BFC_OrderAction = '6'
// 全部查询
defineDict.THOST_FTDC_BFC_AllQuery = '7'
// 系统功能：登入/登出/修改密码等
defineDict.THOST_FTDC_BFC_log = 'a'
// 基本查询：查询基础数据，如合约，交易所等常量
defineDict.THOST_FTDC_BFC_BaseQry = 'b'
// 交易查询：如查成交，委托
defineDict.THOST_FTDC_BFC_TradeQry = 'c'
// 交易功能：报单，撤单
defineDict.THOST_FTDC_BFC_Trade = 'd'
// 银期转账
defineDict.THOST_FTDC_BFC_Virement = 'e'
// 风险监控
defineDict.THOST_FTDC_BFC_Risk = 'f'
// 查询/管理：查询会话，踢人等
defineDict.THOST_FTDC_BFC_Session = 'g'
// 风控通知控制
defineDict.THOST_FTDC_BFC_RiskNoticeCtl = 'h'
// 风控通知发送
defineDict.THOST_FTDC_BFC_RiskNotice = 'i'
// 察看经纪公司资金权限
defineDict.THOST_FTDC_BFC_BrokerDeposit = 'j'
// 资金查询
defineDict.THOST_FTDC_BFC_QueryFund = 'k'
// 报单查询
defineDict.THOST_FTDC_BFC_QueryOrder = 'l'
// 成交查询
defineDict.THOST_FTDC_BFC_QueryTrade = 'm'
// 持仓查询
defineDict.THOST_FTDC_BFC_QueryPosition = 'n'
// 行情查询
defineDict.THOST_FTDC_BFC_QueryMarketData = 'o'
// 用户事件查询
defineDict.THOST_FTDC_BFC_QueryUserEvent = 'p'
// 风险通知查询
defineDict.THOST_FTDC_BFC_QueryRiskNotify = 'q'
// 出入金查询
defineDict.THOST_FTDC_BFC_QueryFundChange = 'r'
// 投资者信息查询
defineDict.THOST_FTDC_BFC_QueryInvestor = 's'
// 交易编码查询
defineDict.THOST_FTDC_BFC_QueryTradingCode = 't'
// 强平
defineDict.THOST_FTDC_BFC_ForceClose = 'u'
// 压力测试
defineDict.THOST_FTDC_BFC_PressTest = 'v'
// 权益反算
defineDict.THOST_FTDC_BFC_RemainCalc = 'w'
// 净持仓保证金指标
defineDict.THOST_FTDC_BFC_NetPositionInd = 'x'
// 风险预算
defineDict.THOST_FTDC_BFC_RiskPredict = 'y'
// 数据导出
defineDict.THOST_FTDC_BFC_DataExport = 'z'
// 风控指标设置
defineDict.THOST_FTDC_BFC_RiskTargetSetup = 'A'
// 行情预警
defineDict.THOST_FTDC_BFC_MarketDataWarn = 'B'
// 业务通知查询
defineDict.THOST_FTDC_BFC_QryBizNotice = 'C'
// 业务通知模板设置
defineDict.THOST_FTDC_BFC_CfgBizNotice = 'D'
// 同步动态令牌
defineDict.THOST_FTDC_BFC_SyncOTP = 'E'
// 发送业务通知
defineDict.THOST_FTDC_BFC_SendBizNotice = 'F'
// 风险级别标准设置
defineDict.THOST_FTDC_BFC_CfgRiskLevelStd = 'G'
// 交易终端应急功能
defineDict.THOST_FTDC_BFC_TbCommand = 'H'
// 删除未知单
defineDict.THOST_FTDC_BFC_DeleteOrder = 'J'
// 预埋报单插入
defineDict.THOST_FTDC_BFC_ParkedOrderInsert = 'K'
// 预埋报单操作
defineDict.THOST_FTDC_BFC_ParkedOrderAction = 'L'

typedefDict.TThostFtdcBrokerFunctionCodeType = 'char'

// TFtdcOrderActionStatusType是一个报单操作状态类型
// 已经提交
defineDict.THOST_FTDC_OAS_Submitted = 'a'
// 已经接受
defineDict.THOST_FTDC_OAS_Accepted = 'b'
// 已经被拒绝
defineDict.THOST_FTDC_OAS_Rejected = 'c'

typedefDict.TThostFtdcOrderActionStatusType = 'char'

// TFtdcOrderStatusType是一个报单状态类型
// 全部成交
defineDict.THOST_FTDC_OST_AllTraded = '0'
// 部分成交还在队列中
defineDict.THOST_FTDC_OST_PartTradedQueueing = '1'
// 部分成交不在队列中
defineDict.THOST_FTDC_OST_PartTradedNotQueueing = '2'
// 未成交还在队列中
defineDict.THOST_FTDC_OST_NoTradeQueueing = '3'
// 未成交不在队列中
defineDict.THOST_FTDC_OST_NoTradeNotQueueing = '4'
// 撤单
defineDict.THOST_FTDC_OST_Canceled = '5'
// 未知
defineDict.THOST_FTDC_OST_Unknown = 'a'
// 尚未触发
defineDict.THOST_FTDC_OST_NotTouched = 'b'
// 已触发
defineDict.THOST_FTDC_OST_Touched = 'c'

typedefDict.TThostFtdcOrderStatusType = 'char'

// TFtdcOrderSubmitStatusType是一个报单提交状态类型
// 已经提交
defineDict.THOST_FTDC_OSS_InsertSubmitted = '0'
// 撤单已经提交
defineDict.THOST_FTDC_OSS_CancelSubmitted = '1'
// 修改已经提交
defineDict.THOST_FTDC_OSS_ModifySubmitted = '2'
// 已经接受
defineDict.THOST_FTDC_OSS_Accepted = '3'
// 报单已经被拒绝
defineDict.THOST_FTDC_OSS_InsertRejected = '4'
// 撤单已经被拒绝
defineDict.THOST_FTDC_OSS_CancelRejected = '5'
// 改单已经被拒绝
defineDict.THOST_FTDC_OSS_ModifyRejected = '6'

typedefDict.TThostFtdcOrderSubmitStatusType = 'char'

// TFtdcPositionDateType是一个持仓日期类型
// 今日持仓
defineDict.THOST_FTDC_PSD_Today = '1'
// 历史持仓
defineDict.THOST_FTDC_PSD_History = '2'

typedefDict.TThostFtdcPositionDateType = 'char'

// TFtdcPositionDateTypeType是一个持仓日期类型类型
// 使用历史持仓
defineDict.THOST_FTDC_PDT_UseHistory = '1'
// 不使用历史持仓
defineDict.THOST_FTDC_PDT_NoUseHistory = '2'

typedefDict.TThostFtdcPositionDateTypeType = 'char'

// TFtdcTradingRoleType是一个交易角色类型
// 代理
defineDict.THOST_FTDC_ER_Broker = '1'
// 自营
defineDict.THOST_FTDC_ER_Host = '2'
// 做市商
defineDict.THOST_FTDC_ER_Maker = '3'

typedefDict.TThostFtdcTradingRoleType = 'char'

// TFtdcProductClassType是一个产品类型类型
// 期货
defineDict.THOST_FTDC_PC_Futures = '1'
// 期货期权
defineDict.THOST_FTDC_PC_Options = '2'
// 组合
defineDict.THOST_FTDC_PC_Combination = '3'
// 即期
defineDict.THOST_FTDC_PC_Spot = '4'
// 期转现
defineDict.THOST_FTDC_PC_EFP = '5'
// 现货期权
defineDict.THOST_FTDC_PC_SpotOption = '6'
// 个股期权
defineDict.THOST_FTDC_PC_ETFOption = '7'
// 证券
defineDict.THOST_FTDC_PC_Stock = '8'

typedefDict.TThostFtdcProductClassType = 'char'

// TFtdcInstLifePhaseType是一个合约生命周期状态类型
// 未上市
defineDict.THOST_FTDC_IP_NotStart = '0'
// 上市
defineDict.THOST_FTDC_IP_Started = '1'
// 停牌
defineDict.THOST_FTDC_IP_Pause = '2'
// 到期
defineDict.THOST_FTDC_IP_Expired = '3'

typedefDict.TThostFtdcInstLifePhaseType = 'char'

// TFtdcDirectionType是一个买卖方向类型
// 买
defineDict.THOST_FTDC_D_Buy = '0'
// 卖
defineDict.THOST_FTDC_D_Sell = '1'

typedefDict.TThostFtdcDirectionType = 'char'

// TFtdcPositionTypeType是一个持仓类型类型
// 净持仓
defineDict.THOST_FTDC_PT_Net = '1'
// 综合持仓
defineDict.THOST_FTDC_PT_Gross = '2'

typedefDict.TThostFtdcPositionTypeType = 'char'

// TFtdcPosiDirectionType是一个持仓多空方向类型
// 净
defineDict.THOST_FTDC_PD_Net = '1'
// 多头
defineDict.THOST_FTDC_PD_Long = '2'
// 空头
defineDict.THOST_FTDC_PD_Short = '3'

typedefDict.TThostFtdcPosiDirectionType = 'char'

// TFtdcSysSettlementStatusType是一个系统结算状态类型
// 不活跃
defineDict.THOST_FTDC_SS_NonActive = '1'
// 启动
defineDict.THOST_FTDC_SS_Startup = '2'
// 操作
defineDict.THOST_FTDC_SS_Operating = '3'
// 结算
defineDict.THOST_FTDC_SS_Settlement = '4'
// 结算完成
defineDict.THOST_FTDC_SS_SettlementFinished = '5'

typedefDict.TThostFtdcSysSettlementStatusType = 'char'

// TFtdcRatioAttrType是一个费率属性类型
// 交易费率
defineDict.THOST_FTDC_RA_Trade = '0'
// 结算费率
defineDict.THOST_FTDC_RA_Settlement = '1'

typedefDict.TThostFtdcRatioAttrType = 'char'

// TFtdcHedgeFlagType是一个投机套保标志类型
// 投机
defineDict.THOST_FTDC_HF_Speculation = '1'
// 套利
defineDict.THOST_FTDC_HF_Arbitrage = '2'
// 套保
defineDict.THOST_FTDC_HF_Hedge = '3'
// 备兑
defineDict.THOST_FTDC_HF_Covered = '4'

typedefDict.TThostFtdcHedgeFlagType = 'char'

// TFtdcBillHedgeFlagType是一个投机套保标志类型
// 投机
defineDict.THOST_FTDC_BHF_Speculation = '1'
// 套利
defineDict.THOST_FTDC_BHF_Arbitrage = '2'
// 套保
defineDict.THOST_FTDC_BHF_Hedge = '3'

typedefDict.TThostFtdcBillHedgeFlagType = 'char'

// TFtdcClientIDTypeType是一个交易编码类型类型
// 投机
defineDict.THOST_FTDC_CIDT_Speculation = '1'
// 套利
defineDict.THOST_FTDC_CIDT_Arbitrage = '2'
// 套保
defineDict.THOST_FTDC_CIDT_Hedge = '3'

typedefDict.TThostFtdcClientIDTypeType = 'char'

// TFtdcOrderPriceTypeType是一个报单价格条件类型
// 任意价
defineDict.THOST_FTDC_OPT_AnyPrice = '1'
// 限价
defineDict.THOST_FTDC_OPT_LimitPrice = '2'
// 最优价
defineDict.THOST_FTDC_OPT_BestPrice = '3'
// 最新价
defineDict.THOST_FTDC_OPT_LastPrice = '4'
// 最新价浮动上浮1个ticks
defineDict.THOST_FTDC_OPT_LastPricePlusOneTicks = '5'
// 最新价浮动上浮2个ticks
defineDict.THOST_FTDC_OPT_LastPricePlusTwoTicks = '6'
// 最新价浮动上浮3个ticks
defineDict.THOST_FTDC_OPT_LastPricePlusThreeTicks = '7'
// 卖一价
defineDict.THOST_FTDC_OPT_AskPrice1 = '8'
// 卖一价浮动上浮1个ticks
defineDict.THOST_FTDC_OPT_AskPrice1PlusOneTicks = '9'
// 卖一价浮动上浮2个ticks
defineDict.THOST_FTDC_OPT_AskPrice1PlusTwoTicks = 'A'
// 卖一价浮动上浮3个ticks
defineDict.THOST_FTDC_OPT_AskPrice1PlusThreeTicks = 'B'
// 买一价
defineDict.THOST_FTDC_OPT_BidPrice1 = 'C'
// 买一价浮动上浮1个ticks
defineDict.THOST_FTDC_OPT_BidPrice1PlusOneTicks = 'D'
// 买一价浮动上浮2个ticks
defineDict.THOST_FTDC_OPT_BidPrice1PlusTwoTicks = 'E'
// 买一价浮动上浮3个ticks
defineDict.THOST_FTDC_OPT_BidPrice1PlusThreeTicks = 'F'
// 五档价
defineDict.THOST_FTDC_OPT_FiveLevelPrice = 'G'
// 本方最优价
defineDict.THOST_FTDC_OPT_BestPriceThisSide = 'H'

typedefDict.TThostFtdcOrderPriceTypeType = 'char'

// TFtdcOffsetFlagType是一个开平标志类型
// 开仓
defineDict.THOST_FTDC_OF_Open = '0'
// 平仓
defineDict.THOST_FTDC_OF_Close = '1'
// 强平
defineDict.THOST_FTDC_OF_ForceClose = '2'
// 平今
defineDict.THOST_FTDC_OF_CloseToday = '3'
// 平昨
defineDict.THOST_FTDC_OF_CloseYesterday = '4'
// 强减
defineDict.THOST_FTDC_OF_ForceOff = '5'
// 本地强平
defineDict.THOST_FTDC_OF_LocalForceClose = '6'

typedefDict.TThostFtdcOffsetFlagType = 'char'

// TFtdcForceCloseReasonType是一个强平原因类型
// 非强平
defineDict.THOST_FTDC_FCC_NotForceClose = '0'
// 资金不足
defineDict.THOST_FTDC_FCC_LackDeposit = '1'
// 客户超仓
defineDict.THOST_FTDC_FCC_ClientOverPositionLimit = '2'
// 会员超仓
defineDict.THOST_FTDC_FCC_MemberOverPositionLimit = '3'
// 持仓非整数倍
defineDict.THOST_FTDC_FCC_NotMultiple = '4'
// 违规
defineDict.THOST_FTDC_FCC_Violation = '5'
// 其它
defineDict.THOST_FTDC_FCC_Other = '6'
// 自然人临近交割
defineDict.THOST_FTDC_FCC_PersonDeliv = '7'

typedefDict.TThostFtdcForceCloseReasonType = 'char'

// TFtdcOrderTypeType是一个报单类型类型
// 正常
defineDict.THOST_FTDC_ORDT_Normal = '0'
// 报价衍生
defineDict.THOST_FTDC_ORDT_DeriveFromQuote = '1'
// 组合衍生
defineDict.THOST_FTDC_ORDT_DeriveFromCombination = '2'
// 组合报单
defineDict.THOST_FTDC_ORDT_Combination = '3'
// 条件单
defineDict.THOST_FTDC_ORDT_ConditionalOrder = '4'
// 互换单
defineDict.THOST_FTDC_ORDT_Swap = '5'

typedefDict.TThostFtdcOrderTypeType = 'char'

// TFtdcTimeConditionType是一个有效期类型类型
// 立即完成，否则撤销
defineDict.THOST_FTDC_TC_IOC = '1'
// 本节有效
defineDict.THOST_FTDC_TC_GFS = '2'
// 当日有效
defineDict.THOST_FTDC_TC_GFD = '3'
// 指定日期前有效
defineDict.THOST_FTDC_TC_GTD = '4'
// 撤销前有效
defineDict.THOST_FTDC_TC_GTC = '5'
// 集合竞价有效
defineDict.THOST_FTDC_TC_GFA = '6'

typedefDict.TThostFtdcTimeConditionType = 'char'

// TFtdcVolumeConditionType是一个成交量类型类型
// 任何数量
defineDict.THOST_FTDC_VC_AV = '1'
// 最小数量
defineDict.THOST_FTDC_VC_MV = '2'
// 全部数量
defineDict.THOST_FTDC_VC_CV = '3'

typedefDict.TThostFtdcVolumeConditionType = 'char'

// TFtdcContingentConditionType是一个触发条件类型
// 立即
defineDict.THOST_FTDC_CC_Immediately = '1'
// 止损
defineDict.THOST_FTDC_CC_Touch = '2'
// 止赢
defineDict.THOST_FTDC_CC_TouchProfit = '3'
// 预埋单
defineDict.THOST_FTDC_CC_ParkedOrder = '4'
// 最新价大于条件价
defineDict.THOST_FTDC_CC_LastPriceGreaterThanStopPrice = '5'
// 最新价大于等于条件价
defineDict.THOST_FTDC_CC_LastPriceGreaterEqualStopPrice = '6'
// 最新价小于条件价
defineDict.THOST_FTDC_CC_LastPriceLesserThanStopPrice = '7'
// 最新价小于等于条件价
defineDict.THOST_FTDC_CC_LastPriceLesserEqualStopPrice = '8'
// 卖一价大于条件价
defineDict.THOST_FTDC_CC_AskPriceGreaterThanStopPrice = '9'
// 卖一价大于等于条件价
defineDict.THOST_FTDC_CC_AskPriceGreaterEqualStopPrice = 'A'
// 卖一价小于条件价
defineDict.THOST_FTDC_CC_AskPriceLesserThanStopPrice = 'B'
// 卖一价小于等于条件价
defineDict.THOST_FTDC_CC_AskPriceLesserEqualStopPrice = 'C'
// 买一价大于条件价
defineDict.THOST_FTDC_CC_BidPriceGreaterThanStopPrice = 'D'
// 买一价大于等于条件价
defineDict.THOST_FTDC_CC_BidPriceGreaterEqualStopPrice = 'E'
// 买一价小于条件价
defineDict.THOST_FTDC_CC_BidPriceLesserThanStopPrice = 'F'
// 买一价小于等于条件价
defineDict.THOST_FTDC_CC_BidPriceLesserEqualStopPrice = 'H'

typedefDict.TThostFtdcContingentConditionType = 'char'

// TFtdcActionFlagType是一个操作标志类型
// 删除
defineDict.THOST_FTDC_AF_Delete = '0'
// 修改
defineDict.THOST_FTDC_AF_Modify = '3'

typedefDict.TThostFtdcActionFlagType = 'char'

// TFtdcTradingRightType是一个交易权限类型
// 可以交易
defineDict.THOST_FTDC_TR_Allow = '0'
// 只能平仓
defineDict.THOST_FTDC_TR_CloseOnly = '1'
// 不能交易
defineDict.THOST_FTDC_TR_Forbidden = '2'

typedefDict.TThostFtdcTradingRightType = 'char'

// TFtdcOrderSourceType是一个报单来源类型
// 来自参与者
defineDict.THOST_FTDC_OSRC_Participant = '0'
// 来自管理员
defineDict.THOST_FTDC_OSRC_Administrator = '1'

typedefDict.TThostFtdcOrderSourceType = 'char'

// TFtdcTradeTypeType是一个成交类型类型
// 组合持仓拆分为单一持仓,初始化不应包含该类型的持仓
defineDict.THOST_FTDC_TRDT_SplitCombination = '// '
// 普通成交
defineDict.THOST_FTDC_TRDT_Common = '0'
// 期权执行
defineDict.THOST_FTDC_TRDT_OptionsExecution = '1'
// OTC成交
defineDict.THOST_FTDC_TRDT_OTC = '2'
// 期转现衍生成交
defineDict.THOST_FTDC_TRDT_EFPDerived = '3'
// 组合衍生成交
defineDict.THOST_FTDC_TRDT_CombinationDerived = '4'

typedefDict.TThostFtdcTradeTypeType = 'char'

// TFtdcPriceSourceType是一个成交价来源类型
// 前成交价
defineDict.THOST_FTDC_PSRC_LastPrice = '0'
// 买委托价
defineDict.THOST_FTDC_PSRC_Buy = '1'
// 卖委托价
defineDict.THOST_FTDC_PSRC_Sell = '2'

typedefDict.TThostFtdcPriceSourceType = 'char'

// TFtdcInstrumentStatusType是一个合约交易状态类型
// 开盘前
defineDict.THOST_FTDC_IS_BeforeTrading = '0'
// 非交易
defineDict.THOST_FTDC_IS_NoTrading = '1'
// 连续交易
defineDict.THOST_FTDC_IS_Continous = '2'
// 集合竞价报单
defineDict.THOST_FTDC_IS_AuctionOrdering = '3'
// 集合竞价价格平衡
defineDict.THOST_FTDC_IS_AuctionBalance = '4'
// 集合竞价撮合
defineDict.THOST_FTDC_IS_AuctionMatch = '5'
// 收盘
defineDict.THOST_FTDC_IS_Closed = '6'

typedefDict.TThostFtdcInstrumentStatusType = 'char'

// TFtdcInstStatusEnterReasonType是一个品种进入交易状态原因类型
// 自动切换
defineDict.THOST_FTDC_IER_Automatic = '1'
// 手动切换
defineDict.THOST_FTDC_IER_Manual = '2'
// 熔断
defineDict.THOST_FTDC_IER_Fuse = '3'

typedefDict.TThostFtdcInstStatusEnterReasonType = 'char'

// TFtdcOrderActionRefType是一个报单操作引用类型
typedefDict.TThostFtdcOrderActionRefType = 'int'

// TFtdcInstallCountType是一个安装数量类型
typedefDict.TThostFtdcInstallCountType = 'int'

// TFtdcInstallIDType是一个安装编号类型
typedefDict.TThostFtdcInstallIDType = 'int'

// TFtdcErrorIDType是一个错误代码类型
typedefDict.TThostFtdcErrorIDType = 'int'

// TFtdcSettlementIDType是一个结算编号类型
typedefDict.TThostFtdcSettlementIDType = 'int'

// TFtdcVolumeType是一个数量类型
typedefDict.TThostFtdcVolumeType = 'int'

// TFtdcFrontIDType是一个前置编号类型
typedefDict.TThostFtdcFrontIDType = 'int'

// TFtdcSessionIDType是一个会话编号类型
typedefDict.TThostFtdcSessionIDType = 'int'

// TFtdcSequenceNoType是一个序号类型
typedefDict.TThostFtdcSequenceNoType = 'int'

// TFtdcCommandNoType是一个DB命令序号类型
typedefDict.TThostFtdcCommandNoType = 'int'

// TFtdcMillisecType是一个时间（毫秒）类型
typedefDict.TThostFtdcMillisecType = 'int'

// TFtdcVolumeMultipleType是一个合约数量乘数类型
typedefDict.TThostFtdcVolumeMultipleType = 'int'

// TFtdcTradingSegmentSNType是一个交易阶段编号类型
typedefDict.TThostFtdcTradingSegmentSNType = 'int'

// TFtdcRequestIDType是一个请求编号类型
typedefDict.TThostFtdcRequestIDType = 'int'

// TFtdcYearType是一个年份类型
typedefDict.TThostFtdcYearType = 'int'

// TFtdcMonthType是一个月份类型
typedefDict.TThostFtdcMonthType = 'int'

// TFtdcBoolType是一个布尔型类型
typedefDict.TThostFtdcBoolType = 'int'

// TFtdcPriceType是一个价格类型
typedefDict.TThostFtdcPriceType = 'float'

// TFtdcCombOffsetFlagType是一个组合开平标志类型
typedefDict.TThostFtdcCombOffsetFlagType = 'string'

// TFtdcCombHedgeFlagType是一个组合投机套保标志类型
typedefDict.TThostFtdcCombHedgeFlagType = 'string'

// TFtdcRatioType是一个比率类型
typedefDict.TThostFtdcRatioType = 'float'

// TFtdcMoneyType是一个资金类型
typedefDict.TThostFtdcMoneyType = 'float'

// TFtdcLargeVolumeType是一个大额数量类型
typedefDict.TThostFtdcLargeVolumeType = 'float'

// TFtdcSequenceSeriesType是一个序列系列号类型
typedefDict.TThostFtdcSequenceSeriesType = 'int'

// TFtdcCommPhaseNoType是一个通讯时段编号类型
typedefDict.TThostFtdcCommPhaseNoType = 'int'

// TFtdcSequenceLabelType是一个序列编号类型
typedefDict.TThostFtdcSequenceLabelType = 'string'

// TFtdcUnderlyingMultipleType是一个基础商品乘数类型
typedefDict.TThostFtdcUnderlyingMultipleType = 'float'

// TFtdcPriorityType是一个优先级类型
typedefDict.TThostFtdcPriorityType = 'int'

// TFtdcContractCodeType是一个合同编号类型
typedefDict.TThostFtdcContractCodeType = 'string'

// TFtdcCityType是一个市类型
typedefDict.TThostFtdcCityType = 'string'

// TFtdcIsStockType是一个是否股民类型
typedefDict.TThostFtdcIsStockType = 'string'

// TFtdcChannelType是一个渠道类型
typedefDict.TThostFtdcChannelType = 'string'

// TFtdcAddressType是一个通讯地址类型
typedefDict.TThostFtdcAddressType = 'string'

// TFtdcZipCodeType是一个邮政编码类型
typedefDict.TThostFtdcZipCodeType = 'string'

// TFtdcTelephoneType是一个联系电话类型
typedefDict.TThostFtdcTelephoneType = 'string'

// TFtdcFaxType是一个传真类型
typedefDict.TThostFtdcFaxType = 'string'

// TFtdcMobileType是一个手机类型
typedefDict.TThostFtdcMobileType = 'string'

// TFtdcEMailType是一个电子邮件类型
typedefDict.TThostFtdcEMailType = 'string'

// TFtdcMemoType是一个备注类型
typedefDict.TThostFtdcMemoType = 'string'

// TFtdcCompanyCodeType是一个企业代码类型
typedefDict.TThostFtdcCompanyCodeType = 'string'

// TFtdcWebsiteType是一个网站地址类型
typedefDict.TThostFtdcWebsiteType = 'string'

// TFtdcTaxNoType是一个税务登记号类型
typedefDict.TThostFtdcTaxNoType = 'string'

// TFtdcBatchStatusType是一个处理状态类型
// 未上传
defineDict.THOST_FTDC_BS_NoUpload = '1'
// 已上传
defineDict.THOST_FTDC_BS_Uploaded = '2'
// 审核失败
defineDict.THOST_FTDC_BS_Failed = '3'

typedefDict.TThostFtdcBatchStatusType = 'char'

// TFtdcPropertyIDType是一个属性代码类型
typedefDict.TThostFtdcPropertyIDType = 'string'

// TFtdcPropertyNameType是一个属性名称类型
typedefDict.TThostFtdcPropertyNameType = 'string'

// TFtdcLicenseNoType是一个营业执照号类型
typedefDict.TThostFtdcLicenseNoType = 'string'

// TFtdcAgentIDType是一个经纪人代码类型
typedefDict.TThostFtdcAgentIDType = 'string'

// TFtdcAgentNameType是一个经纪人名称类型
typedefDict.TThostFtdcAgentNameType = 'string'

// TFtdcAgentGroupIDType是一个经纪人组代码类型
typedefDict.TThostFtdcAgentGroupIDType = 'string'

// TFtdcAgentGroupNameType是一个经纪人组名称类型
typedefDict.TThostFtdcAgentGroupNameType = 'string'

// TFtdcReturnStyleType是一个按品种返还方式类型
// 按所有品种
defineDict.THOST_FTDC_RS_All = '1'
// 按品种
defineDict.THOST_FTDC_RS_ByProduct = '2'

typedefDict.TThostFtdcReturnStyleType = 'char'

// TFtdcReturnPatternType是一个返还模式类型
// 按成交手数
defineDict.THOST_FTDC_RP_ByVolume = '1'
// 按留存手续费
defineDict.THOST_FTDC_RP_ByFeeOnHand = '2'

typedefDict.TThostFtdcReturnPatternType = 'char'

// TFtdcReturnLevelType是一个返还级别类型
// 级别1
defineDict.THOST_FTDC_RL_Level1 = '1'
// 级别2
defineDict.THOST_FTDC_RL_Level2 = '2'
// 级别3
defineDict.THOST_FTDC_RL_Level3 = '3'
// 级别4
defineDict.THOST_FTDC_RL_Level4 = '4'
// 级别5
defineDict.THOST_FTDC_RL_Level5 = '5'
// 级别6
defineDict.THOST_FTDC_RL_Level6 = '6'
// 级别7
defineDict.THOST_FTDC_RL_Level7 = '7'
// 级别8
defineDict.THOST_FTDC_RL_Level8 = '8'
// 级别9
defineDict.THOST_FTDC_RL_Level9 = '9'

typedefDict.TThostFtdcReturnLevelType = 'char'

// TFtdcReturnStandardType是一个返还标准类型
// 分阶段返还
defineDict.THOST_FTDC_RSD_ByPeriod = '1'
// 按某一标准
defineDict.THOST_FTDC_RSD_ByStandard = '2'

typedefDict.TThostFtdcReturnStandardType = 'char'

// TFtdcMortgageTypeType是一个质押类型类型
// 质出
defineDict.THOST_FTDC_MT_Out = '0'
// 质入
defineDict.THOST_FTDC_MT_In = '1'

typedefDict.TThostFtdcMortgageTypeType = 'char'

// TFtdcInvestorSettlementParamIDType是一个投资者结算参数代码类型
// 质押比例
defineDict.THOST_FTDC_ISPI_MortgageRatio = '4'
// 保证金算法
defineDict.THOST_FTDC_ISPI_MarginWay = '5'
// 结算单结存是否包含质押
defineDict.THOST_FTDC_ISPI_BillDeposit = '9'

typedefDict.TThostFtdcInvestorSettlementParamIDType = 'char'

// TFtdcExchangeSettlementParamIDType是一个交易所结算参数代码类型
// 质押比例
defineDict.THOST_FTDC_ESPI_MortgageRatio = '1'
// 分项资金导入项
defineDict.THOST_FTDC_ESPI_OtherFundItem = '2'
// 分项资金入交易所出入金
defineDict.THOST_FTDC_ESPI_OtherFundImport = '3'
// 中金所开户最低可用金额
defineDict.THOST_FTDC_ESPI_CFFEXMinPrepa = '6'
// 郑商所结算方式
defineDict.THOST_FTDC_ESPI_CZCESettlementType = '7'
// 交易所交割手续费收取方式
defineDict.THOST_FTDC_ESPI_ExchDelivFeeMode = '9'
// 投资者交割手续费收取方式
defineDict.THOST_FTDC_ESPI_DelivFeeMode = '0'
// 郑商所组合持仓保证金收取方式
defineDict.THOST_FTDC_ESPI_CZCEComMarginType = 'A'
// 大商所套利保证金是否优惠
defineDict.THOST_FTDC_ESPI_DceComMarginType = 'B'
// 虚值期权保证金优惠比率
defineDict.THOST_FTDC_ESPI_OptOutDisCountRate = 'a'
// 最低保障系数
defineDict.THOST_FTDC_ESPI_OptMiniGuarantee = 'b'

typedefDict.TThostFtdcExchangeSettlementParamIDType = 'char'

// TFtdcSystemParamIDType是一个系统参数代码类型
// 投资者代码最小长度
defineDict.THOST_FTDC_SPI_InvestorIDMinLength = '1'
// 投资者帐号代码最小长度
defineDict.THOST_FTDC_SPI_AccountIDMinLength = '2'
// 投资者开户默认登录权限
defineDict.THOST_FTDC_SPI_UserRightLogon = '3'
// 投资者交易结算单成交汇总方式
defineDict.THOST_FTDC_SPI_SettlementBillTrade = '4'
// 统一开户更新交易编码方式
defineDict.THOST_FTDC_SPI_TradingCode = '5'
// 结算是否判断存在未复核的出入金和分项资金
defineDict.THOST_FTDC_SPI_CheckFund = '6'
// 是否启用手续费模板数据权限
defineDict.THOST_FTDC_SPI_CommModelRight = '7'
// 是否启用保证金率模板数据权限
defineDict.THOST_FTDC_SPI_MarginModelRight = '9'
// 是否规范用户才能激活
defineDict.THOST_FTDC_SPI_IsStandardActive = '8'
// 上传的交易所结算文件路径
defineDict.THOST_FTDC_SPI_UploadSettlementFile = 'U'
// 上报保证金监控中心文件路径
defineDict.THOST_FTDC_SPI_DownloadCSRCFile = 'D'
// 生成的结算单文件路径
defineDict.THOST_FTDC_SPI_SettlementBillFile = 'S'
// 证监会文件标识
defineDict.THOST_FTDC_SPI_CSRCOthersFile = 'C'
// 投资者照片路径
defineDict.THOST_FTDC_SPI_InvestorPhoto = 'P'
// 全结经纪公司上传文件路径
defineDict.THOST_FTDC_SPI_CSRCData = 'R'
// 开户密码录入方式
defineDict.THOST_FTDC_SPI_InvestorPwdModel = 'I'
// 投资者中金所结算文件下载路径
defineDict.THOST_FTDC_SPI_CFFEXInvestorSettleFile = 'F'
// 投资者代码编码方式
defineDict.THOST_FTDC_SPI_InvestorIDType = 'a'
// 休眠户最高权益
defineDict.THOST_FTDC_SPI_FreezeMaxReMain = 'r'
// 手续费相关操作实时上场开关
defineDict.THOST_FTDC_SPI_IsSync = 'A'
// 解除开仓权限限制
defineDict.THOST_FTDC_SPI_RelieveOpenLimit = 'O'
// 是否规范用户才能休眠
defineDict.THOST_FTDC_SPI_IsStandardFreeze = 'X'
// 郑商所是否开放所有品种套保交易
defineDict.THOST_FTDC_SPI_CZCENormalProductHedge = 'B'

typedefDict.TThostFtdcSystemParamIDType = 'char'

// TFtdcTradeParamIDType是一个交易系统参数代码类型
// 系统加密算法
defineDict.THOST_FTDC_TPID_EncryptionStandard = 'E'
// 系统风险算法
defineDict.THOST_FTDC_TPID_RiskMode = 'R'
// 系统风险算法是否全局 0-否 1-是
defineDict.THOST_FTDC_TPID_RiskModeGlobal = 'G'
// 密码加密算法
defineDict.THOST_FTDC_TPID_modeEncode = 'P'
// 价格小数位数参数
defineDict.THOST_FTDC_TPID_tickMode = 'T'
// 用户最大会话数
defineDict.THOST_FTDC_TPID_SingleUserSessionMaxNum = 'S'
// 最大连续登录失败数
defineDict.THOST_FTDC_TPID_LoginFailMaxNum = 'L'
// 是否强制认证
defineDict.THOST_FTDC_TPID_IsAuthForce = 'A'
// 是否冻结证券持仓
defineDict.THOST_FTDC_TPID_IsPosiFreeze = 'F'
// 是否限仓
defineDict.THOST_FTDC_TPID_IsPosiLimit = 'M'
// 郑商所询价时间间隔
defineDict.THOST_FTDC_TPID_ForQuoteTimeInterval = 'Q'

typedefDict.TThostFtdcTradeParamIDType = 'char'

// TFtdcSettlementParamValueType是一个参数代码值类型
typedefDict.TThostFtdcSettlementParamValueType = 'string'

// TFtdcCounterIDType是一个计数器代码类型
typedefDict.TThostFtdcCounterIDType = 'string'

// TFtdcInvestorGroupNameType是一个投资者分组名称类型
typedefDict.TThostFtdcInvestorGroupNameType = 'string'

// TFtdcBrandCodeType是一个牌号类型
typedefDict.TThostFtdcBrandCodeType = 'string'

// TFtdcWarehouseType是一个仓库类型
typedefDict.TThostFtdcWarehouseType = 'string'

// TFtdcProductDateType是一个产期类型
typedefDict.TThostFtdcProductDateType = 'string'

// TFtdcGradeType是一个等级类型
typedefDict.TThostFtdcGradeType = 'string'

// TFtdcClassifyType是一个类别类型
typedefDict.TThostFtdcClassifyType = 'string'

// TFtdcPositionType是一个货位类型
typedefDict.TThostFtdcPositionType = 'string'

// TFtdcYieldlyType是一个产地类型
typedefDict.TThostFtdcYieldlyType = 'string'

// TFtdcWeightType是一个公定重量类型
typedefDict.TThostFtdcWeightType = 'string'

// TFtdcSubEntryFundNoType是一个分项资金流水号类型
typedefDict.TThostFtdcSubEntryFundNoType = 'int'

// TFtdcFileIDType是一个文件标识类型
// 资金数据
defineDict.THOST_FTDC_FI_SettlementFund = 'F'
// 成交数据
defineDict.THOST_FTDC_FI_Trade = 'T'
// 投资者持仓数据
defineDict.THOST_FTDC_FI_InvestorPosition = 'P'
// 投资者分项资金数据
defineDict.THOST_FTDC_FI_SubEntryFund = 'O'
// 组合持仓数据
defineDict.THOST_FTDC_FI_CZCECombinationPos = 'C'
// 上报保证金监控中心数据
defineDict.THOST_FTDC_FI_CSRCData = 'R'
// 郑商所平仓了结数据
defineDict.THOST_FTDC_FI_CZCEClose = 'L'
// 郑商所非平仓了结数据
defineDict.THOST_FTDC_FI_CZCENoClose = 'N'
// 持仓明细数据
defineDict.THOST_FTDC_FI_PositionDtl = 'D'
// 期权执行文件
defineDict.THOST_FTDC_FI_OptionStrike = 'S'
// 结算价比对文件
defineDict.THOST_FTDC_FI_SettlementPriceComparison = 'M'
// 上期所非持仓变动明细
defineDict.THOST_FTDC_FI_NonTradePosChange = 'B'

typedefDict.TThostFtdcFileIDType = 'char'

// TFtdcFileNameType是一个文件名称类型
typedefDict.TThostFtdcFileNameType = 'string'

// TFtdcFileTypeType是一个文件上传类型类型
// 结算
defineDict.THOST_FTDC_FUT_Settlement = '0'
// 核对
defineDict.THOST_FTDC_FUT_Check = '1'

typedefDict.TThostFtdcFileTypeType = 'char'

// TFtdcFileFormatType是一个文件格式类型
// 文本文件(.txt)
defineDict.THOST_FTDC_FFT_Txt = '0'
// 压缩文件(.zip)
defineDict.THOST_FTDC_FFT_Zip = '1'
// DBF文件(.dbf)
defineDict.THOST_FTDC_FFT_DBF = '2'

typedefDict.TThostFtdcFileFormatType = 'char'

// TFtdcFileUploadStatusType是一个文件状态类型
// 上传成功
defineDict.THOST_FTDC_FUS_SucceedUpload = '1'
// 上传失败
defineDict.THOST_FTDC_FUS_FailedUpload = '2'
// 导入成功
defineDict.THOST_FTDC_FUS_SucceedLoad = '3'
// 导入部分成功
defineDict.THOST_FTDC_FUS_PartSucceedLoad = '4'
// 导入失败
defineDict.THOST_FTDC_FUS_FailedLoad = '5'

typedefDict.TThostFtdcFileUploadStatusType = 'char'

// TFtdcTransferDirectionType是一个移仓方向类型
// 移出
defineDict.THOST_FTDC_TD_Out = '0'
// 移入
defineDict.THOST_FTDC_TD_In = '1'

typedefDict.TThostFtdcTransferDirectionType = 'char'

// TFtdcUploadModeType是一个上传文件类型类型
typedefDict.TThostFtdcUploadModeType = 'string'

// TFtdcAccountIDType是一个投资者帐号类型
typedefDict.TThostFtdcAccountIDType = 'string'

// TFtdcBankFlagType是一个银行统一标识类型类型
typedefDict.TThostFtdcBankFlagType = 'string'

// TFtdcBankAccountType是一个银行账户类型
typedefDict.TThostFtdcBankAccountType = 'string'

// TFtdcOpenNameType是一个银行账户的开户人名称类型
typedefDict.TThostFtdcOpenNameType = 'string'

// TFtdcOpenBankType是一个银行账户的开户行类型
typedefDict.TThostFtdcOpenBankType = 'string'

// TFtdcBankNameType是一个银行名称类型
typedefDict.TThostFtdcBankNameType = 'string'

// TFtdcPublishPathType是一个发布路径类型
typedefDict.TThostFtdcPublishPathType = 'string'

// TFtdcOperatorIDType是一个操作员代码类型
typedefDict.TThostFtdcOperatorIDType = 'string'

// TFtdcMonthCountType是一个月份数量类型
typedefDict.TThostFtdcMonthCountType = 'int'

// TFtdcAdvanceMonthArrayType是一个月份提前数组类型
typedefDict.TThostFtdcAdvanceMonthArrayType = 'string'

// TFtdcDateExprType是一个日期表达式类型
typedefDict.TThostFtdcDateExprType = 'string'

// TFtdcInstrumentIDExprType是一个合约代码表达式类型
typedefDict.TThostFtdcInstrumentIDExprType = 'string'

// TFtdcInstrumentNameExprType是一个合约名称表达式类型
typedefDict.TThostFtdcInstrumentNameExprType = 'string'

// TFtdcSpecialCreateRuleType是一个特殊的创建规则类型
// 没有特殊创建规则
defineDict.THOST_FTDC_SC_NoSpecialRule = '0'
// 不包含春节
defineDict.THOST_FTDC_SC_NoSpringFestival = '1'

typedefDict.TThostFtdcSpecialCreateRuleType = 'char'

// TFtdcBasisPriceTypeType是一个挂牌基准价类型类型
// 上一合约结算价
defineDict.THOST_FTDC_IPT_LastSettlement = '1'
// 上一合约收盘价
defineDict.THOST_FTDC_IPT_LaseClose = '2'

typedefDict.TThostFtdcBasisPriceTypeType = 'char'

// TFtdcProductLifePhaseType是一个产品生命周期状态类型
// 活跃
defineDict.THOST_FTDC_PLP_Active = '1'
// 不活跃
defineDict.THOST_FTDC_PLP_NonActive = '2'
// 注销
defineDict.THOST_FTDC_PLP_Canceled = '3'

typedefDict.TThostFtdcProductLifePhaseType = 'char'

// TFtdcDeliveryModeType是一个交割方式类型
// 现金交割
defineDict.THOST_FTDC_DM_CashDeliv = '1'
// 实物交割
defineDict.THOST_FTDC_DM_CommodityDeliv = '2'

typedefDict.TThostFtdcDeliveryModeType = 'char'

// TFtdcLogLevelType是一个日志级别类型
typedefDict.TThostFtdcLogLevelType = 'string'

// TFtdcProcessNameType是一个存储过程名称类型
typedefDict.TThostFtdcProcessNameType = 'string'

// TFtdcOperationMemoType是一个操作摘要类型
typedefDict.TThostFtdcOperationMemoType = 'string'

// TFtdcFundIOTypeType是一个出入金类型类型
// 出入金
defineDict.THOST_FTDC_FIOT_FundIO = '1'
// 银期转帐
defineDict.THOST_FTDC_FIOT_Transfer = '2'
// 银期换汇
defineDict.THOST_FTDC_FIOT_SwapCurrency = '3'

typedefDict.TThostFtdcFundIOTypeType = 'char'

// TFtdcFundTypeType是一个资金类型类型
// 银行存款
defineDict.THOST_FTDC_FT_Deposite = '1'
// 分项资金
defineDict.THOST_FTDC_FT_ItemFund = '2'
// 公司调整
defineDict.THOST_FTDC_FT_Company = '3'
// 资金内转
defineDict.THOST_FTDC_FT_InnerTransfer = '4'

typedefDict.TThostFtdcFundTypeType = 'char'

// TFtdcFundDirectionType是一个出入金方向类型
// 入金
defineDict.THOST_FTDC_FD_In = '1'
// 出金
defineDict.THOST_FTDC_FD_Out = '2'

typedefDict.TThostFtdcFundDirectionType = 'char'

// TFtdcFundStatusType是一个资金状态类型
// 已录入
defineDict.THOST_FTDC_FS_Record = '1'
// 已复核
defineDict.THOST_FTDC_FS_Check = '2'
// 已冲销
defineDict.THOST_FTDC_FS_Charge = '3'

typedefDict.TThostFtdcFundStatusType = 'char'

// TFtdcBillNoType是一个票据号类型
typedefDict.TThostFtdcBillNoType = 'string'

// TFtdcBillNameType是一个票据名称类型
typedefDict.TThostFtdcBillNameType = 'string'

// TFtdcPublishStatusType是一个发布状态类型
// 未发布
defineDict.THOST_FTDC_PS_None = '1'
// 正在发布
defineDict.THOST_FTDC_PS_Publishing = '2'
// 已发布
defineDict.THOST_FTDC_PS_Published = '3'

typedefDict.TThostFtdcPublishStatusType = 'char'

// TFtdcEnumValueIDType是一个枚举值代码类型
typedefDict.TThostFtdcEnumValueIDType = 'string'

// TFtdcEnumValueTypeType是一个枚举值类型类型
typedefDict.TThostFtdcEnumValueTypeType = 'string'

// TFtdcEnumValueLabelType是一个枚举值名称类型
typedefDict.TThostFtdcEnumValueLabelType = 'string'

// TFtdcEnumValueResultType是一个枚举值结果类型
typedefDict.TThostFtdcEnumValueResultType = 'string'

// TFtdcSystemStatusType是一个系统状态类型
// 不活跃
defineDict.THOST_FTDC_ES_NonActive = '1'
// 启动
defineDict.THOST_FTDC_ES_Startup = '2'
// 交易开始初始化
defineDict.THOST_FTDC_ES_Initialize = '3'
// 交易完成初始化
defineDict.THOST_FTDC_ES_Initialized = '4'
// 收市开始
defineDict.THOST_FTDC_ES_Close = '5'
// 收市完成
defineDict.THOST_FTDC_ES_Closed = '6'
// 结算
defineDict.THOST_FTDC_ES_Settlement = '7'

typedefDict.TThostFtdcSystemStatusType = 'char'

// TFtdcSettlementStatusType是一个结算状态类型
// 初始
defineDict.THOST_FTDC_STS_Initialize = '0'
// 结算中
defineDict.THOST_FTDC_STS_Settlementing = '1'
// 已结算
defineDict.THOST_FTDC_STS_Settlemented = '2'
// 结算完成
defineDict.THOST_FTDC_STS_Finished = '3'

typedefDict.TThostFtdcSettlementStatusType = 'char'

// TFtdcRangeIntTypeType是一个限定值类型类型
typedefDict.TThostFtdcRangeIntTypeType = 'string'

// TFtdcRangeIntFromType是一个限定值下限类型
typedefDict.TThostFtdcRangeIntFromType = 'string'

// TFtdcRangeIntToType是一个限定值上限类型
typedefDict.TThostFtdcRangeIntToType = 'string'

// TFtdcFunctionIDType是一个功能代码类型
typedefDict.TThostFtdcFunctionIDType = 'string'

// TFtdcFunctionValueCodeType是一个功能编码类型
typedefDict.TThostFtdcFunctionValueCodeType = 'string'

// TFtdcFunctionNameType是一个功能名称类型
typedefDict.TThostFtdcFunctionNameType = 'string'

// TFtdcRoleIDType是一个角色编号类型
typedefDict.TThostFtdcRoleIDType = 'string'

// TFtdcRoleNameType是一个角色名称类型
typedefDict.TThostFtdcRoleNameType = 'string'

// TFtdcDescriptionType是一个描述类型
typedefDict.TThostFtdcDescriptionType = 'string'

// TFtdcCombineIDType是一个组合编号类型
typedefDict.TThostFtdcCombineIDType = 'string'

// TFtdcCombineTypeType是一个组合类型类型
typedefDict.TThostFtdcCombineTypeType = 'string'

// TFtdcInvestorTypeType是一个投资者类型类型
// 自然人
defineDict.THOST_FTDC_CT_Person = '0'
// 法人
defineDict.THOST_FTDC_CT_Company = '1'
// 投资基金
defineDict.THOST_FTDC_CT_Fund = '2'
// 特殊法人
defineDict.THOST_FTDC_CT_SpecialOrgan = '3'
// 资管户
defineDict.THOST_FTDC_CT_Asset = '4'

typedefDict.TThostFtdcInvestorTypeType = 'char'

// TFtdcBrokerTypeType是一个经纪公司类型类型
// 交易会员
defineDict.THOST_FTDC_BT_Trade = '0'
// 交易结算会员
defineDict.THOST_FTDC_BT_TradeSettle = '1'

typedefDict.TThostFtdcBrokerTypeType = 'char'

// TFtdcRiskLevelType是一个风险等级类型
// 低风险客户
defineDict.THOST_FTDC_FAS_Low = '1'
// 普通客户
defineDict.THOST_FTDC_FAS_Normal = '2'
// 关注客户
defineDict.THOST_FTDC_FAS_Focus = '3'
// 风险客户
defineDict.THOST_FTDC_FAS_Risk = '4'

typedefDict.TThostFtdcRiskLevelType = 'char'

// TFtdcFeeAcceptStyleType是一个手续费收取方式类型
// 按交易收取
defineDict.THOST_FTDC_FAS_ByTrade = '1'
// 按交割收取
defineDict.THOST_FTDC_FAS_ByDeliv = '2'
// 不收
defineDict.THOST_FTDC_FAS_None = '3'
// 按指定手续费收取
defineDict.THOST_FTDC_FAS_FixFee = '4'

typedefDict.TThostFtdcFeeAcceptStyleType = 'char'

// TFtdcPasswordTypeType是一个密码类型类型
// 交易密码
defineDict.THOST_FTDC_PWDT_Trade = '1'
// 资金密码
defineDict.THOST_FTDC_PWDT_Account = '2'

typedefDict.TThostFtdcPasswordTypeType = 'char'

// TFtdcAlgorithmType是一个盈亏算法类型
// 浮盈浮亏都计算
defineDict.THOST_FTDC_AG_All = '1'
// 浮盈不计，浮亏计
defineDict.THOST_FTDC_AG_OnlyLost = '2'
// 浮盈计，浮亏不计
defineDict.THOST_FTDC_AG_OnlyGain = '3'
// 浮盈浮亏都不计算
defineDict.THOST_FTDC_AG_None = '4'

typedefDict.TThostFtdcAlgorithmType = 'char'

// TFtdcIncludeCloseProfitType是一个是否包含平仓盈利类型
// 包含平仓盈利
defineDict.THOST_FTDC_ICP_Include = '0'
// 不包含平仓盈利
defineDict.THOST_FTDC_ICP_NotInclude = '2'

typedefDict.TThostFtdcIncludeCloseProfitType = 'char'

// TFtdcAllWithoutTradeType是一个是否受可提比例限制类型
// 无仓无成交不受可提比例限制
defineDict.THOST_FTDC_AWT_Enable = '0'
// 受可提比例限制
defineDict.THOST_FTDC_AWT_Disable = '2'
// 无仓不受可提比例限制
defineDict.THOST_FTDC_AWT_NoHoldEnable = '3'

typedefDict.TThostFtdcAllWithoutTradeType = 'char'

// TFtdcCommentType是一个盈亏算法说明类型
typedefDict.TThostFtdcCommentType = 'string'

// TFtdcVersionType是一个版本号类型
typedefDict.TThostFtdcVersionType = 'string'

// TFtdcTradeCodeType是一个交易代码类型
typedefDict.TThostFtdcTradeCodeType = 'string'

// TFtdcTradeDateType是一个交易日期类型
typedefDict.TThostFtdcTradeDateType = 'string'

// TFtdcTradeTimeType是一个交易时间类型
typedefDict.TThostFtdcTradeTimeType = 'string'

// TFtdcTradeSerialType是一个发起方流水号类型
typedefDict.TThostFtdcTradeSerialType = 'string'

// TFtdcTradeSerialNoType是一个发起方流水号类型
typedefDict.TThostFtdcTradeSerialNoType = 'int'

// TFtdcFutureIDType是一个期货公司代码类型
typedefDict.TThostFtdcFutureIDType = 'string'

// TFtdcBankIDType是一个银行代码类型
typedefDict.TThostFtdcBankIDType = 'string'

// TFtdcBankBrchIDType是一个银行分中心代码类型
typedefDict.TThostFtdcBankBrchIDType = 'string'

// TFtdcBankBranchIDType是一个分中心代码类型
typedefDict.TThostFtdcBankBranchIDType = 'string'

// TFtdcOperNoType是一个交易柜员类型
typedefDict.TThostFtdcOperNoType = 'string'

// TFtdcDeviceIDType是一个渠道标志类型
typedefDict.TThostFtdcDeviceIDType = 'string'

// TFtdcRecordNumType是一个记录数类型
typedefDict.TThostFtdcRecordNumType = 'string'

// TFtdcFutureAccountType是一个期货资金账号类型
typedefDict.TThostFtdcFutureAccountType = 'string'

// TFtdcFuturePwdFlagType是一个资金密码核对标志类型
// 不核对
defineDict.THOST_FTDC_FPWD_UnCheck = '0'
// 核对
defineDict.THOST_FTDC_FPWD_Check = '1'

typedefDict.TThostFtdcFuturePwdFlagType = 'char'

// TFtdcTransferTypeType是一个银期转账类型类型
// 银行转期货
defineDict.THOST_FTDC_TT_BankToFuture = '0'
// 期货转银行
defineDict.THOST_FTDC_TT_FutureToBank = '1'

typedefDict.TThostFtdcTransferTypeType = 'char'

// TFtdcFutureAccPwdType是一个期货资金密码类型
typedefDict.TThostFtdcFutureAccPwdType = 'string'

// TFtdcCurrencyCodeType是一个币种类型
typedefDict.TThostFtdcCurrencyCodeType = 'string'

// TFtdcRetCodeType是一个响应代码类型
typedefDict.TThostFtdcRetCodeType = 'string'

// TFtdcRetInfoType是一个响应信息类型
typedefDict.TThostFtdcRetInfoType = 'string'

// TFtdcTradeAmtType是一个银行总余额类型
typedefDict.TThostFtdcTradeAmtType = 'string'

// TFtdcUseAmtType是一个银行可用余额类型
typedefDict.TThostFtdcUseAmtType = 'string'

// TFtdcFetchAmtType是一个银行可取余额类型
typedefDict.TThostFtdcFetchAmtType = 'string'

// TFtdcTransferValidFlagType是一个转账有效标志类型
// 无效或失败
defineDict.THOST_FTDC_TVF_Invalid = '0'
// 有效
defineDict.THOST_FTDC_TVF_Valid = '1'
// 冲正
defineDict.THOST_FTDC_TVF_Reverse = '2'

typedefDict.TThostFtdcTransferValidFlagType = 'char'

// TFtdcCertCodeType是一个证件号码类型
typedefDict.TThostFtdcCertCodeType = 'string'

// TFtdcReasonType是一个事由类型
// 错单
defineDict.THOST_FTDC_RN_CD = '0'
// 资金在途
defineDict.THOST_FTDC_RN_ZT = '1'
// 其它
defineDict.THOST_FTDC_RN_QT = '2'

typedefDict.TThostFtdcReasonType = 'char'

// TFtdcFundProjectIDType是一个资金项目编号类型
typedefDict.TThostFtdcFundProjectIDType = 'string'

// TFtdcSexType是一个性别类型
// 未知
defineDict.THOST_FTDC_SEX_None = '0'
// 男
defineDict.THOST_FTDC_SEX_Man = '1'
// 女
defineDict.THOST_FTDC_SEX_Woman = '2'

typedefDict.TThostFtdcSexType = 'char'

// TFtdcProfessionType是一个职业类型
typedefDict.TThostFtdcProfessionType = 'string'

// TFtdcNationalType是一个国籍类型
typedefDict.TThostFtdcNationalType = 'string'

// TFtdcProvinceType是一个省类型
typedefDict.TThostFtdcProvinceType = 'string'

// TFtdcRegionType是一个区类型
typedefDict.TThostFtdcRegionType = 'string'

// TFtdcCountryType是一个国家类型
typedefDict.TThostFtdcCountryType = 'string'

// TFtdcLicenseNOType是一个营业执照类型
typedefDict.TThostFtdcLicenseNOType = 'string'

// TFtdcCompanyTypeType是一个企业性质类型
typedefDict.TThostFtdcCompanyTypeType = 'string'

// TFtdcBusinessScopeType是一个经营范围类型
typedefDict.TThostFtdcBusinessScopeType = 'string'

// TFtdcCapitalCurrencyType是一个注册资本币种类型
typedefDict.TThostFtdcCapitalCurrencyType = 'string'

// TFtdcUserTypeType是一个用户类型类型
// 投资者
defineDict.THOST_FTDC_UT_Investor = '0'
// 操作员
defineDict.THOST_FTDC_UT_Operator = '1'
// 管理员
defineDict.THOST_FTDC_UT_SuperUser = '2'

typedefDict.TThostFtdcUserTypeType = 'char'

// TFtdcBranchIDType是一个营业部编号类型
typedefDict.TThostFtdcBranchIDType = 'string'

// TFtdcRateTypeType是一个费率类型类型
// 保证金率
defineDict.THOST_FTDC_RATETYPE_MarginRate = '2'

typedefDict.TThostFtdcRateTypeType = 'char'

// TFtdcNoteTypeType是一个通知类型类型
// 交易结算单
defineDict.THOST_FTDC_NOTETYPE_TradeSettleBill = '1'
// 交易结算月报
defineDict.THOST_FTDC_NOTETYPE_TradeSettleMonth = '2'
// 追加保证金通知书
defineDict.THOST_FTDC_NOTETYPE_CallMarginNotes = '3'
// 强行平仓通知书
defineDict.THOST_FTDC_NOTETYPE_ForceCloseNotes = '4'
// 成交通知书
defineDict.THOST_FTDC_NOTETYPE_TradeNotes = '5'
// 交割通知书
defineDict.THOST_FTDC_NOTETYPE_DelivNotes = '6'

typedefDict.TThostFtdcNoteTypeType = 'char'

// TFtdcSettlementStyleType是一个结算单方式类型
// 逐日盯市
defineDict.THOST_FTDC_SBS_Day = '1'
// 逐笔对冲
defineDict.THOST_FTDC_SBS_Volume = '2'

typedefDict.TThostFtdcSettlementStyleType = 'char'

// TFtdcBrokerDNSType是一个域名类型
typedefDict.TThostFtdcBrokerDNSType = 'string'

// TFtdcSentenceType是一个语句类型
typedefDict.TThostFtdcSentenceType = 'string'

// TFtdcSettlementBillTypeType是一个结算单类型类型
// 日报
defineDict.THOST_FTDC_ST_Day = '0'
// 月报
defineDict.THOST_FTDC_ST_Month = '1'

typedefDict.TThostFtdcSettlementBillTypeType = 'char'

// TFtdcUserRightTypeType是一个客户权限类型类型
// 登录
defineDict.THOST_FTDC_URT_Logon = '1'
// 银期转帐
defineDict.THOST_FTDC_URT_Transfer = '2'
// 邮寄结算单
defineDict.THOST_FTDC_URT_EMail = '3'
// 传真结算单
defineDict.THOST_FTDC_URT_Fax = '4'
// 条件单
defineDict.THOST_FTDC_URT_ConditionOrder = '5'

typedefDict.TThostFtdcUserRightTypeType = 'char'

// TFtdcMarginPriceTypeType是一个保证金价格类型类型
// 昨结算价
defineDict.THOST_FTDC_MPT_PreSettlementPrice = '1'
// 最新价
defineDict.THOST_FTDC_MPT_SettlementPrice = '2'
// 成交均价
defineDict.THOST_FTDC_MPT_AveragePrice = '3'
// 开仓价
defineDict.THOST_FTDC_MPT_OpenPrice = '4'

typedefDict.TThostFtdcMarginPriceTypeType = 'char'

// TFtdcBillGenStatusType是一个结算单生成状态类型
// 未生成
defineDict.THOST_FTDC_BGS_None = '0'
// 生成中
defineDict.THOST_FTDC_BGS_NoGenerated = '1'
// 已生成
defineDict.THOST_FTDC_BGS_Generated = '2'

typedefDict.TThostFtdcBillGenStatusType = 'char'

// TFtdcAlgoTypeType是一个算法类型类型
// 持仓处理算法
defineDict.THOST_FTDC_AT_HandlePositionAlgo = '1'
// 寻找保证金率算法
defineDict.THOST_FTDC_AT_FindMarginRateAlgo = '2'

typedefDict.TThostFtdcAlgoTypeType = 'char'

// TFtdcHandlePositionAlgoIDType是一个持仓处理算法编号类型
// 基本
defineDict.THOST_FTDC_HPA_Base = '1'
// 大连商品交易所
defineDict.THOST_FTDC_HPA_DCE = '2'
// 郑州商品交易所
defineDict.THOST_FTDC_HPA_CZCE = '3'

typedefDict.TThostFtdcHandlePositionAlgoIDType = 'char'

// TFtdcFindMarginRateAlgoIDType是一个寻找保证金率算法编号类型
// 基本
defineDict.THOST_FTDC_FMRA_Base = '1'
// 大连商品交易所
defineDict.THOST_FTDC_FMRA_DCE = '2'
// 郑州商品交易所
defineDict.THOST_FTDC_FMRA_CZCE = '3'

typedefDict.TThostFtdcFindMarginRateAlgoIDType = 'char'

// TFtdcHandleTradingAccountAlgoIDType是一个资金处理算法编号类型
// 基本
defineDict.THOST_FTDC_HTAA_Base = '1'
// 大连商品交易所
defineDict.THOST_FTDC_HTAA_DCE = '2'
// 郑州商品交易所
defineDict.THOST_FTDC_HTAA_CZCE = '3'

typedefDict.TThostFtdcHandleTradingAccountAlgoIDType = 'char'

// TFtdcPersonTypeType是一个联系人类型类型
// 指定下单人
defineDict.THOST_FTDC_PST_Order = '1'
// 开户授权人
defineDict.THOST_FTDC_PST_Open = '2'
// 资金调拨人
defineDict.THOST_FTDC_PST_Fund = '3'
// 结算单确认人
defineDict.THOST_FTDC_PST_Settlement = '4'
// 法人
defineDict.THOST_FTDC_PST_Company = '5'
// 法人代表
defineDict.THOST_FTDC_PST_Corporation = '6'
// 投资者联系人
defineDict.THOST_FTDC_PST_LinkMan = '7'
// 分户管理资产负责人
defineDict.THOST_FTDC_PST_Ledger = '8'
// 托（保）管人
defineDict.THOST_FTDC_PST_Trustee = '9'
// 托（保）管机构法人代表
defineDict.THOST_FTDC_PST_TrusteeCorporation = 'A'
// 托（保）管机构开户授权人
defineDict.THOST_FTDC_PST_TrusteeOpen = 'B'
// 托（保）管机构联系人
defineDict.THOST_FTDC_PST_TrusteeContact = 'C'
// 境外自然人参考证件
defineDict.THOST_FTDC_PST_ForeignerRefer = 'D'
// 法人代表参考证件
defineDict.THOST_FTDC_PST_CorporationRefer = 'E'

typedefDict.TThostFtdcPersonTypeType = 'char'

// TFtdcQueryInvestorRangeType是一个查询范围类型
// 所有
defineDict.THOST_FTDC_QIR_All = '1'
// 查询分类
defineDict.THOST_FTDC_QIR_Group = '2'
// 单一投资者
defineDict.THOST_FTDC_QIR_Single = '3'

typedefDict.TThostFtdcQueryInvestorRangeType = 'char'

// TFtdcInvestorRiskStatusType是一个投资者风险状态类型
// 正常
defineDict.THOST_FTDC_IRS_Normal = '1'
// 警告
defineDict.THOST_FTDC_IRS_Warn = '2'
// 追保
defineDict.THOST_FTDC_IRS_Call = '3'
// 强平
defineDict.THOST_FTDC_IRS_Force = '4'
// 异常
defineDict.THOST_FTDC_IRS_Exception = '5'

typedefDict.TThostFtdcInvestorRiskStatusType = 'char'

// TFtdcLegIDType是一个单腿编号类型
typedefDict.TThostFtdcLegIDType = 'int'

// TFtdcLegMultipleType是一个单腿乘数类型
typedefDict.TThostFtdcLegMultipleType = 'int'

// TFtdcImplyLevelType是一个派生层数类型
typedefDict.TThostFtdcImplyLevelType = 'int'

// TFtdcClearAccountType是一个结算账户类型
typedefDict.TThostFtdcClearAccountType = 'string'

// TFtdcOrganNOType是一个结算账户类型
typedefDict.TThostFtdcOrganNOType = 'string'

// TFtdcClearbarchIDType是一个结算账户联行号类型
typedefDict.TThostFtdcClearbarchIDType = 'string'

// TFtdcUserEventTypeType是一个用户事件类型类型
// 登录
defineDict.THOST_FTDC_UET_Login = '1'
// 登出
defineDict.THOST_FTDC_UET_Logout = '2'
// 交易成功
defineDict.THOST_FTDC_UET_Trading = '3'
// 交易失败
defineDict.THOST_FTDC_UET_TradingError = '4'
// 修改密码
defineDict.THOST_FTDC_UET_UpdatePassword = '5'
// 客户端认证
defineDict.THOST_FTDC_UET_Authenticate = '6'
// 其他
defineDict.THOST_FTDC_UET_Other = '9'

typedefDict.TThostFtdcUserEventTypeType = 'char'

// TFtdcUserEventInfoType是一个用户事件信息类型
typedefDict.TThostFtdcUserEventInfoType = 'string'

// TFtdcCloseStyleType是一个平仓方式类型
// 先开先平
defineDict.THOST_FTDC_ICS_Close = '0'
// 先平今再平昨
defineDict.THOST_FTDC_ICS_CloseToday = '1'

typedefDict.TThostFtdcCloseStyleType = 'char'

// TFtdcStatModeType是一个统计方式类型
// ----
defineDict.THOST_FTDC_SM_Non = '0'
// 按合约统计
defineDict.THOST_FTDC_SM_Instrument = '1'
// 按产品统计
defineDict.THOST_FTDC_SM_Product = '2'
// 按投资者统计
defineDict.THOST_FTDC_SM_Investor = '3'

typedefDict.TThostFtdcStatModeType = 'char'

// TFtdcParkedOrderStatusType是一个预埋单状态类型
// 未发送
defineDict.THOST_FTDC_PAOS_NotSend = '1'
// 已发送
defineDict.THOST_FTDC_PAOS_Send = '2'
// 已删除
defineDict.THOST_FTDC_PAOS_Deleted = '3'

typedefDict.TThostFtdcParkedOrderStatusType = 'char'

// TFtdcParkedOrderIDType是一个预埋报单编号类型
typedefDict.TThostFtdcParkedOrderIDType = 'string'

// TFtdcParkedOrderActionIDType是一个预埋撤单编号类型
typedefDict.TThostFtdcParkedOrderActionIDType = 'string'

// TFtdcVirDealStatusType是一个处理状态类型
// 正在处理
defineDict.THOST_FTDC_VDS_Dealing = '1'
// 处理成功
defineDict.THOST_FTDC_VDS_DeaclSucceed = '2'

typedefDict.TThostFtdcVirDealStatusType = 'char'

// TFtdcOrgSystemIDType是一个原有系统代码类型
// 综合交易平台
defineDict.THOST_FTDC_ORGS_Standard = '0'
// 易盛系统
defineDict.THOST_FTDC_ORGS_ESunny = '1'
// 金仕达V6系统
defineDict.THOST_FTDC_ORGS_KingStarV6 = '2'

typedefDict.TThostFtdcOrgSystemIDType = 'char'

// TFtdcVirTradeStatusType是一个交易状态类型
// 正常处理中
defineDict.THOST_FTDC_VTS_NaturalDeal = '0'
// 成功结束
defineDict.THOST_FTDC_VTS_SucceedEnd = '1'
// 失败结束
defineDict.THOST_FTDC_VTS_FailedEND = '2'
// 异常中
defineDict.THOST_FTDC_VTS_Exception = '3'
// 已人工异常处理
defineDict.THOST_FTDC_VTS_ManualDeal = '4'
// 通讯异常 ，请人工处理
defineDict.THOST_FTDC_VTS_MesException = '5'
// 系统出错，请人工处理
defineDict.THOST_FTDC_VTS_SysException = '6'

typedefDict.TThostFtdcVirTradeStatusType = 'char'

// TFtdcVirBankAccTypeType是一个银行帐户类型类型
// 存折
defineDict.THOST_FTDC_VBAT_BankBook = '1'
// 储蓄卡
defineDict.THOST_FTDC_VBAT_BankCard = '2'
// 信用卡
defineDict.THOST_FTDC_VBAT_CreditCard = '3'

typedefDict.TThostFtdcVirBankAccTypeType = 'char'

// TFtdcVirementStatusType是一个银行帐户类型类型
// 正常
defineDict.THOST_FTDC_VMS_Natural = '0'
// 销户
defineDict.THOST_FTDC_VMS_Canceled = '9'

typedefDict.TThostFtdcVirementStatusType = 'char'

// TFtdcVirementAvailAbilityType是一个有效标志类型
// 未确认
defineDict.THOST_FTDC_VAA_NoAvailAbility = '0'
// 有效
defineDict.THOST_FTDC_VAA_AvailAbility = '1'
// 冲正
defineDict.THOST_FTDC_VAA_Repeal = '2'

typedefDict.TThostFtdcVirementAvailAbilityType = 'char'

// TFtdcVirementTradeCodeType是一个交易代码类型
// 银行发起银行资金转期货
defineDict.THOST_FTDC_VTC_BankBankToFuture = '102001'
// 银行发起期货资金转银行
defineDict.THOST_FTDC_VTC_BankFutureToBank = '102002'
// 期货发起银行资金转期货
defineDict.THOST_FTDC_VTC_FutureBankToFuture = '202001'
// 期货发起期货资金转银行
defineDict.THOST_FTDC_VTC_FutureFutureToBank = '202002'

typedefDict.TThostFtdcVirementTradeCodeType = 'char'

// TFtdcPhotoTypeNameType是一个影像类型名称类型
typedefDict.TThostFtdcPhotoTypeNameType = 'string'

// TFtdcPhotoTypeIDType是一个影像类型代码类型
typedefDict.TThostFtdcPhotoTypeIDType = 'string'

// TFtdcPhotoNameType是一个影像名称类型
typedefDict.TThostFtdcPhotoNameType = 'string'

// TFtdcTopicIDType是一个主题代码类型
typedefDict.TThostFtdcTopicIDType = 'int'

// TFtdcReportTypeIDType是一个交易报告类型标识类型
typedefDict.TThostFtdcReportTypeIDType = 'string'

// TFtdcCharacterIDType是一个交易特征代码类型
typedefDict.TThostFtdcCharacterIDType = 'string'

// TFtdcAMLParamIDType是一个参数代码类型
typedefDict.TThostFtdcAMLParamIDType = 'string'

// TFtdcAMLInvestorTypeType是一个投资者类型类型
typedefDict.TThostFtdcAMLInvestorTypeType = 'string'

// TFtdcAMLIdCardTypeType是一个证件类型类型
typedefDict.TThostFtdcAMLIdCardTypeType = 'string'

// TFtdcAMLTradeDirectType是一个资金进出方向类型
typedefDict.TThostFtdcAMLTradeDirectType = 'string'

// TFtdcAMLTradeModelType是一个资金进出方式类型
typedefDict.TThostFtdcAMLTradeModelType = 'string'

// TFtdcAMLParamIDType是一个参数代码类型
typedefDict.TThostFtdcAMLParamIDType = 'string'

// TFtdcAMLOpParamValueType是一个业务参数代码值类型
typedefDict.TThostFtdcAMLOpParamValueType = 'float'

// TFtdcAMLCustomerCardTypeType是一个客户身份证件/证明文件类型类型
typedefDict.TThostFtdcAMLCustomerCardTypeType = 'string'

// TFtdcAMLInstitutionNameType是一个金融机构网点名称类型
typedefDict.TThostFtdcAMLInstitutionNameType = 'string'

// TFtdcAMLDistrictIDType是一个金融机构网点所在地区行政区划代码类型
typedefDict.TThostFtdcAMLDistrictIDType = 'string'

// TFtdcAMLRelationShipType是一个金融机构网点与大额交易的关系类型
typedefDict.TThostFtdcAMLRelationShipType = 'string'

// TFtdcAMLInstitutionTypeType是一个金融机构网点代码类型类型
typedefDict.TThostFtdcAMLInstitutionTypeType = 'string'

// TFtdcAMLInstitutionIDType是一个金融机构网点代码类型
typedefDict.TThostFtdcAMLInstitutionIDType = 'string'

// TFtdcAMLAccountTypeType是一个账户类型类型
typedefDict.TThostFtdcAMLAccountTypeType = 'string'

// TFtdcAMLTradingTypeType是一个交易方式类型
typedefDict.TThostFtdcAMLTradingTypeType = 'string'

// TFtdcAMLTransactClassType是一个涉外收支交易分类与代码类型
typedefDict.TThostFtdcAMLTransactClassType = 'string'

// TFtdcAMLCapitalIOType是一个资金收付标识类型
typedefDict.TThostFtdcAMLCapitalIOType = 'string'

// TFtdcAMLSiteType是一个交易地点类型
typedefDict.TThostFtdcAMLSiteType = 'string'

// TFtdcAMLCapitalPurposeType是一个资金用途类型
typedefDict.TThostFtdcAMLCapitalPurposeType = 'string'

// TFtdcAMLReportTypeType是一个报文类型类型
typedefDict.TThostFtdcAMLReportTypeType = 'string'

// TFtdcAMLSerialNoType是一个编号类型
typedefDict.TThostFtdcAMLSerialNoType = 'string'

// TFtdcAMLStatusType是一个状态类型
typedefDict.TThostFtdcAMLStatusType = 'string'

// TFtdcAMLGenStatusType是一个Aml生成方式类型
// 程序生成
defineDict.THOST_FTDC_GEN_Program = '0'
// 人工生成
defineDict.THOST_FTDC_GEN_HandWork = '1'

typedefDict.TThostFtdcAMLGenStatusType = 'char'

// TFtdcAMLSeqCodeType是一个业务标识号类型
typedefDict.TThostFtdcAMLSeqCodeType = 'string'

// TFtdcAMLFileNameType是一个AML文件名类型
typedefDict.TThostFtdcAMLFileNameType = 'string'

// TFtdcAMLMoneyType是一个反洗钱资金类型
typedefDict.TThostFtdcAMLMoneyType = 'float'

// TFtdcAMLFileAmountType是一个反洗钱资金类型
typedefDict.TThostFtdcAMLFileAmountType = 'int'

// TFtdcCFMMCKeyType是一个密钥类型(保证金监管)类型
typedefDict.TThostFtdcCFMMCKeyType = 'string'

// TFtdcCFMMCTokenType是一个令牌类型(保证金监管)类型
typedefDict.TThostFtdcCFMMCTokenType = 'string'

// TFtdcCFMMCKeyKindType是一个动态密钥类别(保证金监管)类型
// 主动请求更新
defineDict.THOST_FTDC_CFMMCKK_REQUEST = 'R'
// CFMMC自动更新
defineDict.THOST_FTDC_CFMMCKK_AUTO = 'A'
// CFMMC手动更新
defineDict.THOST_FTDC_CFMMCKK_MANUAL = 'M'

typedefDict.TThostFtdcCFMMCKeyKindType = 'char'

// TFtdcAMLReportNameType是一个报文名称类型
typedefDict.TThostFtdcAMLReportNameType = 'string'

// TFtdcDBFComdTypeType是一个DBF命令类型类型
typedefDict.TThostFtdcDBFComdTypeType = 'string'

// TFtdcDBFComTimeType是一个DBF时间类型类型
typedefDict.TThostFtdcDBFComTimeType = 'string'

// TFtdcDBFComNoType是一个DBF流水号类型类型
typedefDict.TThostFtdcDBFComNoType = 'string'

// TFtdcDBFFdNameType是一个DBF字段类型类型
typedefDict.TThostFtdcDBFFdNameType = 'string'

// TFtdcDBFFdContentType是一个DBF字段内容类型类型
typedefDict.TThostFtdcDBFFdContentType = 'string'

// TFtdcIndividualNameType是一个个人姓名类型
typedefDict.TThostFtdcIndividualNameType = 'string'

// TFtdcCurrencyIDType是一个币种代码类型
typedefDict.TThostFtdcCurrencyIDType = 'string'

// TFtdcCustNumberType是一个客户编号类型
typedefDict.TThostFtdcCustNumberType = 'string'

// TFtdcOrganCodeType是一个机构编码类型
typedefDict.TThostFtdcOrganCodeType = 'string'

// TFtdcOrganNameType是一个机构名称类型
typedefDict.TThostFtdcOrganNameType = 'string'

// TFtdcSuperOrganCodeType是一个上级机构编码,即期货公司总部、银行总行类型
typedefDict.TThostFtdcSuperOrganCodeType = 'string'

// TFtdcSubBranchIDType是一个分支机构类型
typedefDict.TThostFtdcSubBranchIDType = 'string'

// TFtdcSubBranchNameType是一个分支机构名称类型
typedefDict.TThostFtdcSubBranchNameType = 'string'

// TFtdcBranchNetCodeType是一个机构网点号类型
typedefDict.TThostFtdcBranchNetCodeType = 'string'

// TFtdcBranchNetNameType是一个机构网点名称类型
typedefDict.TThostFtdcBranchNetNameType = 'string'

// TFtdcOrganFlagType是一个机构标识类型
typedefDict.TThostFtdcOrganFlagType = 'string'

// TFtdcBankCodingForFutureType是一个银行对期货公司的编码类型
typedefDict.TThostFtdcBankCodingForFutureType = 'string'

// TFtdcBankReturnCodeType是一个银行对返回码的定义类型
typedefDict.TThostFtdcBankReturnCodeType = 'string'

// TFtdcPlateReturnCodeType是一个银期转帐平台对返回码的定义类型
typedefDict.TThostFtdcPlateReturnCodeType = 'string'

// TFtdcBankSubBranchIDType是一个银行分支机构编码类型
typedefDict.TThostFtdcBankSubBranchIDType = 'string'

// TFtdcFutureBranchIDType是一个期货分支机构编码类型
typedefDict.TThostFtdcFutureBranchIDType = 'string'

// TFtdcReturnCodeType是一个返回代码类型
typedefDict.TThostFtdcReturnCodeType = 'string'

// TFtdcOperatorCodeType是一个操作员类型
typedefDict.TThostFtdcOperatorCodeType = 'string'

// TFtdcClearDepIDType是一个机构结算帐户机构号类型
typedefDict.TThostFtdcClearDepIDType = 'string'

// TFtdcClearBrchIDType是一个机构结算帐户联行号类型
typedefDict.TThostFtdcClearBrchIDType = 'string'

// TFtdcClearNameType是一个机构结算帐户名称类型
typedefDict.TThostFtdcClearNameType = 'string'

// TFtdcBankAccountNameType是一个银行帐户名称类型
typedefDict.TThostFtdcBankAccountNameType = 'string'

// TFtdcInvDepIDType是一个机构投资人账号机构号类型
typedefDict.TThostFtdcInvDepIDType = 'string'

// TFtdcInvBrchIDType是一个机构投资人联行号类型
typedefDict.TThostFtdcInvBrchIDType = 'string'

// TFtdcMessageFormatVersionType是一个信息格式版本类型
typedefDict.TThostFtdcMessageFormatVersionType = 'string'

// TFtdcDigestType是一个摘要类型
typedefDict.TThostFtdcDigestType = 'string'

// TFtdcAuthenticDataType是一个认证数据类型
typedefDict.TThostFtdcAuthenticDataType = 'string'

// TFtdcPasswordKeyType是一个密钥类型
typedefDict.TThostFtdcPasswordKeyType = 'string'

// TFtdcFutureAccountNameType是一个期货帐户名称类型
typedefDict.TThostFtdcFutureAccountNameType = 'string'

// TFtdcMobilePhoneType是一个手机类型
typedefDict.TThostFtdcMobilePhoneType = 'string'

// TFtdcFutureMainKeyType是一个期货公司主密钥类型
typedefDict.TThostFtdcFutureMainKeyType = 'string'

// TFtdcFutureWorkKeyType是一个期货公司工作密钥类型
typedefDict.TThostFtdcFutureWorkKeyType = 'string'

// TFtdcFutureTransKeyType是一个期货公司传输密钥类型
typedefDict.TThostFtdcFutureTransKeyType = 'string'

// TFtdcBankMainKeyType是一个银行主密钥类型
typedefDict.TThostFtdcBankMainKeyType = 'string'

// TFtdcBankWorkKeyType是一个银行工作密钥类型
typedefDict.TThostFtdcBankWorkKeyType = 'string'

// TFtdcBankTransKeyType是一个银行传输密钥类型
typedefDict.TThostFtdcBankTransKeyType = 'string'

// TFtdcBankServerDescriptionType是一个银行服务器描述信息类型
typedefDict.TThostFtdcBankServerDescriptionType = 'string'

// TFtdcAddInfoType是一个附加信息类型
typedefDict.TThostFtdcAddInfoType = 'string'

// TFtdcDescrInfoForReturnCodeType是一个返回码描述类型
typedefDict.TThostFtdcDescrInfoForReturnCodeType = 'string'

// TFtdcCountryCodeType是一个国家代码类型
typedefDict.TThostFtdcCountryCodeType = 'string'

// TFtdcSerialType是一个流水号类型
typedefDict.TThostFtdcSerialType = 'int'

// TFtdcPlateSerialType是一个平台流水号类型
typedefDict.TThostFtdcPlateSerialType = 'int'

// TFtdcBankSerialType是一个银行流水号类型
typedefDict.TThostFtdcBankSerialType = 'string'

// TFtdcCorrectSerialType是一个被冲正交易流水号类型
typedefDict.TThostFtdcCorrectSerialType = 'int'

// TFtdcFutureSerialType是一个期货公司流水号类型
typedefDict.TThostFtdcFutureSerialType = 'int'

// TFtdcApplicationIDType是一个应用标识类型
typedefDict.TThostFtdcApplicationIDType = 'int'

// TFtdcBankProxyIDType是一个银行代理标识类型
typedefDict.TThostFtdcBankProxyIDType = 'int'

// TFtdcFBTCoreIDType是一个银期转帐核心系统标识类型
typedefDict.TThostFtdcFBTCoreIDType = 'int'

// TFtdcServerPortType是一个服务端口号类型
typedefDict.TThostFtdcServerPortType = 'int'

// TFtdcRepealedTimesType是一个已经冲正次数类型
typedefDict.TThostFtdcRepealedTimesType = 'int'

// TFtdcRepealTimeIntervalType是一个冲正时间间隔类型
typedefDict.TThostFtdcRepealTimeIntervalType = 'int'

// TFtdcTotalTimesType是一个每日累计转帐次数类型
typedefDict.TThostFtdcTotalTimesType = 'int'

// TFtdcFBTRequestIDType是一个请求ID类型
typedefDict.TThostFtdcFBTRequestIDType = 'int'

// TFtdcTIDType是一个交易ID类型
typedefDict.TThostFtdcTIDType = 'int'

// TFtdcTradeAmountType是一个交易金额（元）类型
typedefDict.TThostFtdcTradeAmountType = 'float'

// TFtdcCustFeeType是一个应收客户费用（元）类型
typedefDict.TThostFtdcCustFeeType = 'float'

// TFtdcFutureFeeType是一个应收期货公司费用（元）类型
typedefDict.TThostFtdcFutureFeeType = 'float'

// TFtdcSingleMaxAmtType是一个单笔最高限额类型
typedefDict.TThostFtdcSingleMaxAmtType = 'float'

// TFtdcSingleMinAmtType是一个单笔最低限额类型
typedefDict.TThostFtdcSingleMinAmtType = 'float'

// TFtdcTotalAmtType是一个每日累计转帐额度类型
typedefDict.TThostFtdcTotalAmtType = 'float'

// TFtdcCertificationTypeType是一个证件类型类型
// 身份证
defineDict.THOST_FTDC_CFT_IDCard = '0'
// 护照
defineDict.THOST_FTDC_CFT_Passport = '1'
// 军官证
defineDict.THOST_FTDC_CFT_OfficerIDCard = '2'
// 士兵证
defineDict.THOST_FTDC_CFT_SoldierIDCard = '3'
// 回乡证
defineDict.THOST_FTDC_CFT_HomeComingCard = '4'
// 户口簿
defineDict.THOST_FTDC_CFT_HouseholdRegister = '5'
// 营业执照号
defineDict.THOST_FTDC_CFT_LicenseNo = '6'
// 组织机构代码证
defineDict.THOST_FTDC_CFT_InstitutionCodeCard = '7'
// 临时营业执照号
defineDict.THOST_FTDC_CFT_TempLicenseNo = '8'
// 民办非企业登记证书
defineDict.THOST_FTDC_CFT_NoEnterpriseLicenseNo = '9'
// 其他证件
defineDict.THOST_FTDC_CFT_OtherCard = 'x'
// 主管部门批文
defineDict.THOST_FTDC_CFT_SuperDepAgree = 'a'

typedefDict.TThostFtdcCertificationTypeType = 'char'

// TFtdcFileBusinessCodeType是一个文件业务功能类型
// 其他
defineDict.THOST_FTDC_FBC_Others = '0'
// 转账交易明细对账
defineDict.THOST_FTDC_FBC_TransferDetails = '1'
// 客户账户状态对账
defineDict.THOST_FTDC_FBC_CustAccStatus = '2'
// 账户类交易明细对账
defineDict.THOST_FTDC_FBC_AccountTradeDetails = '3'
// 期货账户信息变更明细对账
defineDict.THOST_FTDC_FBC_FutureAccountChangeInfoDetails = '4'
// 客户资金台账余额明细对账
defineDict.THOST_FTDC_FBC_CustMoneyDetail = '5'
// 客户销户结息明细对账
defineDict.THOST_FTDC_FBC_CustCancelAccountInfo = '6'
// 客户资金余额对账结果
defineDict.THOST_FTDC_FBC_CustMoneyResult = '7'
// 其它对账异常结果文件
defineDict.THOST_FTDC_FBC_OthersExceptionResult = '8'
// 客户结息净额明细
defineDict.THOST_FTDC_FBC_CustInterestNetMoneyDetails = '9'
// 客户资金交收明细
defineDict.THOST_FTDC_FBC_CustMoneySendAndReceiveDetails = 'a'
// 法人存管银行资金交收汇总
defineDict.THOST_FTDC_FBC_CorporationMoneyTotal = 'b'
// 主体间资金交收汇总
defineDict.THOST_FTDC_FBC_MainbodyMoneyTotal = 'c'
// 总分平衡监管数据
defineDict.THOST_FTDC_FBC_MainPartMonitorData = 'd'
// 存管银行备付金余额
defineDict.THOST_FTDC_FBC_PreparationMoney = 'e'
// 协办存管银行资金监管数据
defineDict.THOST_FTDC_FBC_BankMoneyMonitorData = 'f'

typedefDict.TThostFtdcFileBusinessCodeType = 'char'

// TFtdcCashExchangeCodeType是一个汇钞标志类型
// 汇
defineDict.THOST_FTDC_CEC_Exchange = '1'
// 钞
defineDict.THOST_FTDC_CEC_Cash = '2'

typedefDict.TThostFtdcCashExchangeCodeType = 'char'

// TFtdcYesNoIndicatorType是一个是或否标识类型
// 是
defineDict.THOST_FTDC_YNI_Yes = '0'
// 否
defineDict.THOST_FTDC_YNI_No = '1'

typedefDict.TThostFtdcYesNoIndicatorType = 'char'

// TFtdcBanlanceTypeType是一个余额类型类型
// 当前余额
defineDict.THOST_FTDC_BLT_CurrentMoney = '0'
// 可用余额
defineDict.THOST_FTDC_BLT_UsableMoney = '1'
// 可取余额
defineDict.THOST_FTDC_BLT_FetchableMoney = '2'
// 冻结余额
defineDict.THOST_FTDC_BLT_FreezeMoney = '3'

typedefDict.TThostFtdcBanlanceTypeType = 'char'

// TFtdcGenderType是一个性别类型
// 未知状态
defineDict.THOST_FTDC_GD_Unknown = '0'
// 男
defineDict.THOST_FTDC_GD_Male = '1'
// 女
defineDict.THOST_FTDC_GD_Female = '2'

typedefDict.TThostFtdcGenderType = 'char'

// TFtdcFeePayFlagType是一个费用支付标志类型
// 由受益方支付费用
defineDict.THOST_FTDC_FPF_BEN = '0'
// 由发送方支付费用
defineDict.THOST_FTDC_FPF_OUR = '1'
// 由发送方支付发起的费用，受益方支付接受的费用
defineDict.THOST_FTDC_FPF_SHA = '2'

typedefDict.TThostFtdcFeePayFlagType = 'char'

// TFtdcPassWordKeyTypeType是一个密钥类型类型
// 交换密钥
defineDict.THOST_FTDC_PWKT_ExchangeKey = '0'
// 密码密钥
defineDict.THOST_FTDC_PWKT_PassWordKey = '1'
// MAC密钥
defineDict.THOST_FTDC_PWKT_MACKey = '2'
// 报文密钥
defineDict.THOST_FTDC_PWKT_MessageKey = '3'

typedefDict.TThostFtdcPassWordKeyTypeType = 'char'

// TFtdcFBTPassWordTypeType是一个密码类型类型
// 查询
defineDict.THOST_FTDC_PWT_Query = '0'
// 取款
defineDict.THOST_FTDC_PWT_Fetch = '1'
// 转帐
defineDict.THOST_FTDC_PWT_Transfer = '2'
// 交易
defineDict.THOST_FTDC_PWT_Trade = '3'

typedefDict.TThostFtdcFBTPassWordTypeType = 'char'

// TFtdcFBTEncryModeType是一个加密方式类型
// 不加密
defineDict.THOST_FTDC_EM_NoEncry = '0'
// DES
defineDict.THOST_FTDC_EM_DES = '1'
// 3DES
defineDict.THOST_FTDC_EM_3DES = '2'

typedefDict.TThostFtdcFBTEncryModeType = 'char'

// TFtdcBankRepealFlagType是一个银行冲正标志类型
// 银行无需自动冲正
defineDict.THOST_FTDC_BRF_BankNotNeedRepeal = '0'
// 银行待自动冲正
defineDict.THOST_FTDC_BRF_BankWaitingRepeal = '1'
// 银行已自动冲正
defineDict.THOST_FTDC_BRF_BankBeenRepealed = '2'

typedefDict.TThostFtdcBankRepealFlagType = 'char'

// TFtdcBrokerRepealFlagType是一个期商冲正标志类型
// 期商无需自动冲正
defineDict.THOST_FTDC_BRORF_BrokerNotNeedRepeal = '0'
// 期商待自动冲正
defineDict.THOST_FTDC_BRORF_BrokerWaitingRepeal = '1'
// 期商已自动冲正
defineDict.THOST_FTDC_BRORF_BrokerBeenRepealed = '2'

typedefDict.TThostFtdcBrokerRepealFlagType = 'char'

// TFtdcInstitutionTypeType是一个机构类别类型
// 银行
defineDict.THOST_FTDC_TS_Bank = '0'
// 期商
defineDict.THOST_FTDC_TS_Future = '1'
// 券商
defineDict.THOST_FTDC_TS_Store = '2'

typedefDict.TThostFtdcInstitutionTypeType = 'char'

// TFtdcLastFragmentType是一个最后分片标志类型
// 是最后分片
defineDict.THOST_FTDC_LF_Yes = '0'
// 不是最后分片
defineDict.THOST_FTDC_LF_No = '1'

typedefDict.TThostFtdcLastFragmentType = 'char'

// TFtdcBankAccStatusType是一个银行账户状态类型
// 正常
defineDict.THOST_FTDC_BAS_Normal = '0'
// 冻结
defineDict.THOST_FTDC_BAS_Freeze = '1'
// 挂失
defineDict.THOST_FTDC_BAS_ReportLoss = '2'

typedefDict.TThostFtdcBankAccStatusType = 'char'

// TFtdcMoneyAccountStatusType是一个资金账户状态类型
// 正常
defineDict.THOST_FTDC_MAS_Normal = '0'
// 销户
defineDict.THOST_FTDC_MAS_Cancel = '1'

typedefDict.TThostFtdcMoneyAccountStatusType = 'char'

// TFtdcManageStatusType是一个存管状态类型
// 指定存管
defineDict.THOST_FTDC_MSS_Point = '0'
// 预指定
defineDict.THOST_FTDC_MSS_PrePoint = '1'
// 撤销指定
defineDict.THOST_FTDC_MSS_CancelPoint = '2'

typedefDict.TThostFtdcManageStatusType = 'char'

// TFtdcSystemTypeType是一个应用系统类型类型
// 银期转帐
defineDict.THOST_FTDC_SYT_FutureBankTransfer = '0'
// 银证转帐
defineDict.THOST_FTDC_SYT_StockBankTransfer = '1'
// 第三方存管
defineDict.THOST_FTDC_SYT_TheThirdPartStore = '2'

typedefDict.TThostFtdcSystemTypeType = 'char'

// TFtdcTxnEndFlagType是一个银期转帐划转结果标志类型
// 正常处理中
defineDict.THOST_FTDC_TEF_NormalProcessing = '0'
// 成功结束
defineDict.THOST_FTDC_TEF_Success = '1'
// 失败结束
defineDict.THOST_FTDC_TEF_Failed = '2'
// 异常中
defineDict.THOST_FTDC_TEF_Abnormal = '3'
// 已人工异常处理
defineDict.THOST_FTDC_TEF_ManualProcessedForException = '4'
// 通讯异常 ，请人工处理
defineDict.THOST_FTDC_TEF_CommuFailedNeedManualProcess = '5'
// 系统出错，请人工处理
defineDict.THOST_FTDC_TEF_SysErrorNeedManualProcess = '6'

typedefDict.TThostFtdcTxnEndFlagType = 'char'

// TFtdcProcessStatusType是一个银期转帐服务处理状态类型
// 未处理
defineDict.THOST_FTDC_PSS_NotProcess = '0'
// 开始处理
defineDict.THOST_FTDC_PSS_StartProcess = '1'
// 处理完成
defineDict.THOST_FTDC_PSS_Finished = '2'

typedefDict.TThostFtdcProcessStatusType = 'char'

// TFtdcCustTypeType是一个客户类型类型
// 自然人
defineDict.THOST_FTDC_CUSTT_Person = '0'
// 机构户
defineDict.THOST_FTDC_CUSTT_Institution = '1'

typedefDict.TThostFtdcCustTypeType = 'char'

// TFtdcFBTTransferDirectionType是一个银期转帐方向类型
// 入金，银行转期货
defineDict.THOST_FTDC_FBTTD_FromBankToFuture = '1'
// 出金，期货转银行
defineDict.THOST_FTDC_FBTTD_FromFutureToBank = '2'

typedefDict.TThostFtdcFBTTransferDirectionType = 'char'

// TFtdcOpenOrDestroyType是一个开销户类别类型
// 开户
defineDict.THOST_FTDC_OOD_Open = '1'
// 销户
defineDict.THOST_FTDC_OOD_Destroy = '0'

typedefDict.TThostFtdcOpenOrDestroyType = 'char'

// TFtdcAvailabilityFlagType是一个有效标志类型
// 未确认
defineDict.THOST_FTDC_AVAF_Invalid = '0'
// 有效
defineDict.THOST_FTDC_AVAF_Valid = '1'
// 冲正
defineDict.THOST_FTDC_AVAF_Repeal = '2'

typedefDict.TThostFtdcAvailabilityFlagType = 'char'

// TFtdcOrganTypeType是一个机构类型类型
// 银行代理
defineDict.THOST_FTDC_OT_Bank = '1'
// 交易前置
defineDict.THOST_FTDC_OT_Future = '2'
// 银期转帐平台管理
defineDict.THOST_FTDC_OT_PlateForm = '9'

typedefDict.TThostFtdcOrganTypeType = 'char'

// TFtdcOrganLevelType是一个机构级别类型
// 银行总行或期商总部
defineDict.THOST_FTDC_OL_HeadQuarters = '1'
// 银行分中心或期货公司营业部
defineDict.THOST_FTDC_OL_Branch = '2'

typedefDict.TThostFtdcOrganLevelType = 'char'

// TFtdcProtocalIDType是一个协议类型类型
// 期商协议
defineDict.THOST_FTDC_PID_FutureProtocal = '0'
// 工行协议
defineDict.THOST_FTDC_PID_ICBCProtocal = '1'
// 农行协议
defineDict.THOST_FTDC_PID_ABCProtocal = '2'
// 中国银行协议
defineDict.THOST_FTDC_PID_CBCProtocal = '3'
// 建行协议
defineDict.THOST_FTDC_PID_CCBProtocal = '4'
// 交行协议
defineDict.THOST_FTDC_PID_BOCOMProtocal = '5'
// 银期转帐平台协议
defineDict.THOST_FTDC_PID_FBTPlateFormProtocal = 'X'

typedefDict.TThostFtdcProtocalIDType = 'char'

// TFtdcConnectModeType是一个套接字连接方式类型
// 短连接
defineDict.THOST_FTDC_CM_ShortConnect = '0'
// 长连接
defineDict.THOST_FTDC_CM_LongConnect = '1'

typedefDict.TThostFtdcConnectModeType = 'char'

// TFtdcSyncModeType是一个套接字通信方式类型
// 异步
defineDict.THOST_FTDC_SRM_ASync = '0'
// 同步
defineDict.THOST_FTDC_SRM_Sync = '1'

typedefDict.TThostFtdcSyncModeType = 'char'

// TFtdcBankAccTypeType是一个银行帐号类型类型
// 银行存折
defineDict.THOST_FTDC_BAT_BankBook = '1'
// 储蓄卡
defineDict.THOST_FTDC_BAT_SavingCard = '2'
// 信用卡
defineDict.THOST_FTDC_BAT_CreditCard = '3'

typedefDict.TThostFtdcBankAccTypeType = 'char'

// TFtdcFutureAccTypeType是一个期货公司帐号类型类型
// 银行存折
defineDict.THOST_FTDC_FAT_BankBook = '1'
// 储蓄卡
defineDict.THOST_FTDC_FAT_SavingCard = '2'
// 信用卡
defineDict.THOST_FTDC_FAT_CreditCard = '3'

typedefDict.TThostFtdcFutureAccTypeType = 'char'

// TFtdcOrganStatusType是一个接入机构状态类型
// 启用
defineDict.THOST_FTDC_OS_Ready = '0'
// 签到
defineDict.THOST_FTDC_OS_CheckIn = '1'
// 签退
defineDict.THOST_FTDC_OS_CheckOut = '2'
// 对帐文件到达
defineDict.THOST_FTDC_OS_CheckFileArrived = '3'
// 对帐
defineDict.THOST_FTDC_OS_CheckDetail = '4'
// 日终清理
defineDict.THOST_FTDC_OS_DayEndClean = '5'
// 注销
defineDict.THOST_FTDC_OS_Invalid = '9'

typedefDict.TThostFtdcOrganStatusType = 'char'

// TFtdcCCBFeeModeType是一个建行收费模式类型
// 按金额扣收
defineDict.THOST_FTDC_CCBFM_ByAmount = '1'
// 按月扣收
defineDict.THOST_FTDC_CCBFM_ByMonth = '2'

typedefDict.TThostFtdcCCBFeeModeType = 'char'

// TFtdcCommApiTypeType是一个通讯API类型类型
// 客户端
defineDict.THOST_FTDC_CAPIT_Client = '1'
// 服务端
defineDict.THOST_FTDC_CAPIT_Server = '2'
// 交易系统的UserApi
defineDict.THOST_FTDC_CAPIT_UserApi = '3'

typedefDict.TThostFtdcCommApiTypeType = 'char'

// TFtdcServiceIDType是一个服务编号类型
typedefDict.TThostFtdcServiceIDType = 'int'

// TFtdcServiceLineNoType是一个服务线路编号类型
typedefDict.TThostFtdcServiceLineNoType = 'int'

// TFtdcServiceNameType是一个服务名类型
typedefDict.TThostFtdcServiceNameType = 'string'

// TFtdcLinkStatusType是一个连接状态类型
// 已经连接
defineDict.THOST_FTDC_LS_Connected = '1'
// 没有连接
defineDict.THOST_FTDC_LS_Disconnected = '2'

typedefDict.TThostFtdcLinkStatusType = 'char'

// TFtdcCommApiPointerType是一个通讯API指针类型
typedefDict.TThostFtdcCommApiPointerType = 'int'

// TFtdcPwdFlagType是一个密码核对标志类型
// 不核对
defineDict.THOST_FTDC_BPWDF_NoCheck = '0'
// 明文核对
defineDict.THOST_FTDC_BPWDF_BlankCheck = '1'
// 密文核对
defineDict.THOST_FTDC_BPWDF_EncryptCheck = '2'

typedefDict.TThostFtdcPwdFlagType = 'char'

// TFtdcSecuAccTypeType是一个期货帐号类型类型
// 资金帐号
defineDict.THOST_FTDC_SAT_AccountID = '1'
// 资金卡号
defineDict.THOST_FTDC_SAT_CardID = '2'
// 上海股东帐号
defineDict.THOST_FTDC_SAT_SHStockholderID = '3'
// 深圳股东帐号
defineDict.THOST_FTDC_SAT_SZStockholderID = '4'

typedefDict.TThostFtdcSecuAccTypeType = 'char'

// TFtdcTransferStatusType是一个转账交易状态类型
// 正常
defineDict.THOST_FTDC_TRFS_Normal = '0'
// 被冲正
defineDict.THOST_FTDC_TRFS_Repealed = '1'

typedefDict.TThostFtdcTransferStatusType = 'char'

// TFtdcSponsorTypeType是一个发起方类型
// 期商
defineDict.THOST_FTDC_SPTYPE_Broker = '0'
// 银行
defineDict.THOST_FTDC_SPTYPE_Bank = '1'

typedefDict.TThostFtdcSponsorTypeType = 'char'

// TFtdcReqRspTypeType是一个请求响应类别类型
// 请求
defineDict.THOST_FTDC_REQRSP_Request = '0'
// 响应
defineDict.THOST_FTDC_REQRSP_Response = '1'

typedefDict.TThostFtdcReqRspTypeType = 'char'

// TFtdcFBTUserEventTypeType是一个银期转帐用户事件类型类型
// 签到
defineDict.THOST_FTDC_FBTUET_SignIn = '0'
// 银行转期货
defineDict.THOST_FTDC_FBTUET_FromBankToFuture = '1'
// 期货转银行
defineDict.THOST_FTDC_FBTUET_FromFutureToBank = '2'
// 开户
defineDict.THOST_FTDC_FBTUET_OpenAccount = '3'
// 销户
defineDict.THOST_FTDC_FBTUET_CancelAccount = '4'
// 变更银行账户
defineDict.THOST_FTDC_FBTUET_ChangeAccount = '5'
// 冲正银行转期货
defineDict.THOST_FTDC_FBTUET_RepealFromBankToFuture = '6'
// 冲正期货转银行
defineDict.THOST_FTDC_FBTUET_RepealFromFutureToBank = '7'
// 查询银行账户
defineDict.THOST_FTDC_FBTUET_QueryBankAccount = '8'
// 查询期货账户
defineDict.THOST_FTDC_FBTUET_QueryFutureAccount = '9'
// 签退
defineDict.THOST_FTDC_FBTUET_SignOut = 'A'
// 密钥同步
defineDict.THOST_FTDC_FBTUET_SyncKey = 'B'
// 其他
defineDict.THOST_FTDC_FBTUET_Other = 'Z'

typedefDict.TThostFtdcFBTUserEventTypeType = 'char'

// TFtdcBankIDByBankType是一个银行自己的编码类型
typedefDict.TThostFtdcBankIDByBankType = 'string'

// TFtdcBankOperNoType是一个银行操作员号类型
typedefDict.TThostFtdcBankOperNoType = 'string'

// TFtdcBankCustNoType是一个银行客户号类型
typedefDict.TThostFtdcBankCustNoType = 'string'

// TFtdcDBOPSeqNoType是一个递增的序列号类型
typedefDict.TThostFtdcDBOPSeqNoType = 'int'

// TFtdcTableNameType是一个FBT表名类型
typedefDict.TThostFtdcTableNameType = 'string'

// TFtdcPKNameType是一个FBT表操作主键名类型
typedefDict.TThostFtdcPKNameType = 'string'

// TFtdcPKValueType是一个FBT表操作主键值类型
typedefDict.TThostFtdcPKValueType = 'string'

// TFtdcDBOperationType是一个记录操作类型类型
// 插入
defineDict.THOST_FTDC_DBOP_Insert = '0'
// 更新
defineDict.THOST_FTDC_DBOP_Update = '1'
// 删除
defineDict.THOST_FTDC_DBOP_Delete = '2'

typedefDict.TThostFtdcDBOperationType = 'char'

// TFtdcSyncFlagType是一个同步标记类型
// 已同步
defineDict.THOST_FTDC_SYNF_Yes = '0'
// 未同步
defineDict.THOST_FTDC_SYNF_No = '1'

typedefDict.TThostFtdcSyncFlagType = 'char'

// TFtdcTargetIDType是一个同步目标编号类型
typedefDict.TThostFtdcTargetIDType = 'string'

// TFtdcSyncTypeType是一个同步类型类型
// 一次同步
defineDict.THOST_FTDC_SYNT_OneOffSync = '0'
// 定时同步
defineDict.THOST_FTDC_SYNT_TimerSync = '1'
// 定时完全同步
defineDict.THOST_FTDC_SYNT_TimerFullSync = '2'

typedefDict.TThostFtdcSyncTypeType = 'char'

// TFtdcFBETimeType是一个各种换汇时间类型
typedefDict.TThostFtdcFBETimeType = 'string'

// TFtdcFBEBankNoType是一个换汇银行行号类型
typedefDict.TThostFtdcFBEBankNoType = 'string'

// TFtdcFBECertNoType是一个换汇凭证号类型
typedefDict.TThostFtdcFBECertNoType = 'string'

// TFtdcExDirectionType是一个换汇方向类型
// 结汇
defineDict.THOST_FTDC_FBEDIR_Settlement = '0'
// 售汇
defineDict.THOST_FTDC_FBEDIR_Sale = '1'

typedefDict.TThostFtdcExDirectionType = 'char'

// TFtdcFBEBankAccountType是一个换汇银行账户类型
typedefDict.TThostFtdcFBEBankAccountType = 'string'

// TFtdcFBEBankAccountNameType是一个换汇银行账户名类型
typedefDict.TThostFtdcFBEBankAccountNameType = 'string'

// TFtdcFBEAmtType是一个各种换汇金额类型
typedefDict.TThostFtdcFBEAmtType = 'float'

// TFtdcFBEBusinessTypeType是一个换汇业务类型类型
typedefDict.TThostFtdcFBEBusinessTypeType = 'string'

// TFtdcFBEPostScriptType是一个换汇附言类型
typedefDict.TThostFtdcFBEPostScriptType = 'string'

// TFtdcFBERemarkType是一个换汇备注类型
typedefDict.TThostFtdcFBERemarkType = 'string'

// TFtdcExRateType是一个换汇汇率类型
typedefDict.TThostFtdcExRateType = 'float'

// TFtdcFBEResultFlagType是一个换汇成功标志类型
// 成功
defineDict.THOST_FTDC_FBERES_Success = '0'
// 账户余额不足
defineDict.THOST_FTDC_FBERES_InsufficientBalance = '1'
// 交易结果未知
defineDict.THOST_FTDC_FBERES_UnknownTrading = '8'
// 失败
defineDict.THOST_FTDC_FBERES_Fail = 'x'

typedefDict.TThostFtdcFBEResultFlagType = 'char'

// TFtdcFBERtnMsgType是一个换汇返回信息类型
typedefDict.TThostFtdcFBERtnMsgType = 'string'

// TFtdcFBEExtendMsgType是一个换汇扩展信息类型
typedefDict.TThostFtdcFBEExtendMsgType = 'string'

// TFtdcFBEBusinessSerialType是一个换汇记账流水号类型
typedefDict.TThostFtdcFBEBusinessSerialType = 'string'

// TFtdcFBESystemSerialType是一个换汇流水号类型
typedefDict.TThostFtdcFBESystemSerialType = 'string'

// TFtdcFBETotalExCntType是一个换汇交易总笔数类型
typedefDict.TThostFtdcFBETotalExCntType = 'int'

// TFtdcFBEExchStatusType是一个换汇交易状态类型
// 正常
defineDict.THOST_FTDC_FBEES_Normal = '0'
// 交易重发
defineDict.THOST_FTDC_FBEES_ReExchange = '1'

typedefDict.TThostFtdcFBEExchStatusType = 'char'

// TFtdcFBEFileFlagType是一个换汇文件标志类型
// 数据包
defineDict.THOST_FTDC_FBEFG_DataPackage = '0'
// 文件
defineDict.THOST_FTDC_FBEFG_File = '1'

typedefDict.TThostFtdcFBEFileFlagType = 'char'

// TFtdcFBEAlreadyTradeType是一个换汇已交易标志类型
// 未交易
defineDict.THOST_FTDC_FBEAT_NotTrade = '0'
// 已交易
defineDict.THOST_FTDC_FBEAT_Trade = '1'

typedefDict.TThostFtdcFBEAlreadyTradeType = 'char'

// TFtdcFBEOpenBankType是一个换汇账户开户行类型
typedefDict.TThostFtdcFBEOpenBankType = 'string'

// TFtdcFBEUserEventTypeType是一个银期换汇用户事件类型类型
// 签到
defineDict.THOST_FTDC_FBEUET_SignIn = '0'
// 换汇
defineDict.THOST_FTDC_FBEUET_Exchange = '1'
// 换汇重发
defineDict.THOST_FTDC_FBEUET_ReExchange = '2'
// 银行账户查询
defineDict.THOST_FTDC_FBEUET_QueryBankAccount = '3'
// 换汇明细查询
defineDict.THOST_FTDC_FBEUET_QueryExchDetial = '4'
// 换汇汇总查询
defineDict.THOST_FTDC_FBEUET_QueryExchSummary = '5'
// 换汇汇率查询
defineDict.THOST_FTDC_FBEUET_QueryExchRate = '6'
// 对账文件通知
defineDict.THOST_FTDC_FBEUET_CheckBankAccount = '7'
// 签退
defineDict.THOST_FTDC_FBEUET_SignOut = '8'
// 其他
defineDict.THOST_FTDC_FBEUET_Other = 'Z'

typedefDict.TThostFtdcFBEUserEventTypeType = 'char'

// TFtdcFBEFileNameType是一个换汇相关文件名类型
typedefDict.TThostFtdcFBEFileNameType = 'string'

// TFtdcFBEBatchSerialType是一个换汇批次号类型
typedefDict.TThostFtdcFBEBatchSerialType = 'string'

// TFtdcFBEReqFlagType是一个换汇发送标志类型
// 未处理
defineDict.THOST_FTDC_FBERF_UnProcessed = '0'
// 等待发送
defineDict.THOST_FTDC_FBERF_WaitSend = '1'
// 发送成功
defineDict.THOST_FTDC_FBERF_SendSuccess = '2'
// 发送失败
defineDict.THOST_FTDC_FBERF_SendFailed = '3'
// 等待重发
defineDict.THOST_FTDC_FBERF_WaitReSend = '4'

typedefDict.TThostFtdcFBEReqFlagType = 'char'

// TFtdcNotifyClassType是一个风险通知类型类型
// 正常
defineDict.THOST_FTDC_NC_NOERROR = '0'
// 警示
defineDict.THOST_FTDC_NC_Warn = '1'
// 追保
defineDict.THOST_FTDC_NC_Call = '2'
// 强平
defineDict.THOST_FTDC_NC_Force = '3'
// 穿仓
defineDict.THOST_FTDC_NC_CHUANCANG = '4'
// 异常
defineDict.THOST_FTDC_NC_Exception = '5'

typedefDict.TThostFtdcNotifyClassType = 'char'

// TFtdcRiskNofityInfoType是一个客户风险通知消息类型
typedefDict.TThostFtdcRiskNofityInfoType = 'string'

// TFtdcForceCloseSceneIdType是一个强平场景编号类型
typedefDict.TThostFtdcForceCloseSceneIdType = 'string'

// TFtdcForceCloseTypeType是一个强平单类型类型
// 手工强平
defineDict.THOST_FTDC_FCT_Manual = '0'
// 单一投资者辅助强平
defineDict.THOST_FTDC_FCT_Single = '1'
// 批量投资者辅助强平
defineDict.THOST_FTDC_FCT_Group = '2'

typedefDict.TThostFtdcForceCloseTypeType = 'char'

// TFtdcInstrumentIDsType是一个多个产品代码,用+分隔,如cu+zn类型
typedefDict.TThostFtdcInstrumentIDsType = 'string'

// TFtdcRiskNotifyMethodType是一个风险通知途径类型
// 系统通知
defineDict.THOST_FTDC_RNM_System = '0'
// 短信通知
defineDict.THOST_FTDC_RNM_SMS = '1'
// 邮件通知
defineDict.THOST_FTDC_RNM_EMail = '2'
// 人工通知
defineDict.THOST_FTDC_RNM_Manual = '3'

typedefDict.TThostFtdcRiskNotifyMethodType = 'char'

// TFtdcRiskNotifyStatusType是一个风险通知状态类型
// 未生成
defineDict.THOST_FTDC_RNS_NotGen = '0'
// 已生成未发送
defineDict.THOST_FTDC_RNS_Generated = '1'
// 发送失败
defineDict.THOST_FTDC_RNS_SendError = '2'
// 已发送未接收
defineDict.THOST_FTDC_RNS_SendOk = '3'
// 已接收未确认
defineDict.THOST_FTDC_RNS_Received = '4'
// 已确认
defineDict.THOST_FTDC_RNS_Confirmed = '5'

typedefDict.TThostFtdcRiskNotifyStatusType = 'char'

// TFtdcRiskUserEventType是一个风控用户操作事件类型
// 导出数据
defineDict.THOST_FTDC_RUE_ExportData = '0'

typedefDict.TThostFtdcRiskUserEventType = 'char'

// TFtdcParamIDType是一个参数代码类型
typedefDict.TThostFtdcParamIDType = 'int'

// TFtdcParamNameType是一个参数名类型
typedefDict.TThostFtdcParamNameType = 'string'

// TFtdcParamValueType是一个参数值类型
typedefDict.TThostFtdcParamValueType = 'string'

// TFtdcConditionalOrderSortTypeType是一个条件单索引条件类型
// 使用最新价升序
defineDict.THOST_FTDC_COST_LastPriceAsc = '0'
// 使用最新价降序
defineDict.THOST_FTDC_COST_LastPriceDesc = '1'
// 使用卖价升序
defineDict.THOST_FTDC_COST_AskPriceAsc = '2'
// 使用卖价降序
defineDict.THOST_FTDC_COST_AskPriceDesc = '3'
// 使用买价升序
defineDict.THOST_FTDC_COST_BidPriceAsc = '4'
// 使用买价降序
defineDict.THOST_FTDC_COST_BidPriceDesc = '5'

typedefDict.TThostFtdcConditionalOrderSortTypeType = 'char'

// TFtdcSendTypeType是一个报送状态类型
// 未发送
defineDict.THOST_FTDC_UOAST_NoSend = '0'
// 已发送
defineDict.THOST_FTDC_UOAST_Sended = '1'
// 已生成
defineDict.THOST_FTDC_UOAST_Generated = '2'
// 报送失败
defineDict.THOST_FTDC_UOAST_SendFail = '3'
// 接收成功
defineDict.THOST_FTDC_UOAST_Success = '4'
// 接收失败
defineDict.THOST_FTDC_UOAST_Fail = '5'
// 取消报送
defineDict.THOST_FTDC_UOAST_Cancel = '6'

typedefDict.TThostFtdcSendTypeType = 'char'

// TFtdcClientIDStatusType是一个交易编码状态类型
// 未申请
defineDict.THOST_FTDC_UOACS_NoApply = '1'
// 已提交申请
defineDict.THOST_FTDC_UOACS_Submited = '2'
// 已发送申请
defineDict.THOST_FTDC_UOACS_Sended = '3'
// 完成
defineDict.THOST_FTDC_UOACS_Success = '4'
// 拒绝
defineDict.THOST_FTDC_UOACS_Refuse = '5'
// 已撤销编码
defineDict.THOST_FTDC_UOACS_Cancel = '6'

typedefDict.TThostFtdcClientIDStatusType = 'char'

// TFtdcIndustryIDType是一个行业编码类型
typedefDict.TThostFtdcIndustryIDType = 'string'

// TFtdcQuestionIDType是一个特有信息编号类型
typedefDict.TThostFtdcQuestionIDType = 'string'

// TFtdcQuestionContentType是一个特有信息说明类型
typedefDict.TThostFtdcQuestionContentType = 'string'

// TFtdcOptionIDType是一个选项编号类型
typedefDict.TThostFtdcOptionIDType = 'string'

// TFtdcOptionContentType是一个选项说明类型
typedefDict.TThostFtdcOptionContentType = 'string'

// TFtdcQuestionTypeType是一个特有信息类型类型
// 单选
defineDict.THOST_FTDC_QT_Radio = '1'
// 多选
defineDict.THOST_FTDC_QT_Option = '2'
// 填空
defineDict.THOST_FTDC_QT_Blank = '3'

typedefDict.TThostFtdcQuestionTypeType = 'char'

// TFtdcProcessIDType是一个业务流水号类型
typedefDict.TThostFtdcProcessIDType = 'string'

// TFtdcSeqNoType是一个流水号类型
typedefDict.TThostFtdcSeqNoType = 'int'

// TFtdcUOAProcessStatusType是一个流程状态类型
typedefDict.TThostFtdcUOAProcessStatusType = 'string'

// TFtdcProcessTypeType是一个流程功能类型类型
typedefDict.TThostFtdcProcessTypeType = 'string'

// TFtdcBusinessTypeType是一个业务类型类型
// 请求
defineDict.THOST_FTDC_BT_Request = '1'
// 应答
defineDict.THOST_FTDC_BT_Response = '2'
// 通知
defineDict.THOST_FTDC_BT_Notice = '3'

typedefDict.TThostFtdcBusinessTypeType = 'char'

// TFtdcCfmmcReturnCodeType是一个监控中心返回码类型
// 成功
defineDict.THOST_FTDC_CRC_Success = '0'
// 该客户已经有流程在处理中
defineDict.THOST_FTDC_CRC_Working = '1'
// 监控中客户资料检查失败
defineDict.THOST_FTDC_CRC_InfoFail = '2'
// 监控中实名制检查失败
defineDict.THOST_FTDC_CRC_IDCardFail = '3'
// 其他错误
defineDict.THOST_FTDC_CRC_OtherFail = '4'

typedefDict.TThostFtdcCfmmcReturnCodeType = 'char'

// TFtdcExReturnCodeType是一个交易所返回码类型
typedefDict.TThostFtdcExReturnCodeType = 'int'

// TFtdcClientTypeType是一个客户类型类型
// 所有
defineDict.THOST_FTDC_CfMMCCT_All = '0'
// 个人
defineDict.THOST_FTDC_CfMMCCT_Person = '1'
// 单位
defineDict.THOST_FTDC_CfMMCCT_Company = '2'
// 其他
defineDict.THOST_FTDC_CfMMCCT_Other = '3'
// 特殊法人
defineDict.THOST_FTDC_CfMMCCT_SpecialOrgan = '4'
// 资管户
defineDict.THOST_FTDC_CfMMCCT_Asset = '5'

typedefDict.TThostFtdcClientTypeType = 'char'

// TFtdcExchangeIDTypeType是一个交易所编号类型
// 上海期货交易所
defineDict.THOST_FTDC_EIDT_SHFE = 'S'
// 郑州商品交易所
defineDict.THOST_FTDC_EIDT_CZCE = 'Z'
// 大连商品交易所
defineDict.THOST_FTDC_EIDT_DCE = 'D'
// 中国金融期货交易所
defineDict.THOST_FTDC_EIDT_CFFEX = 'J'
// 上海国际能源交易中心股份有限公司
defineDict.THOST_FTDC_EIDT_INE = 'N'
// 上海证券交易所
defineDict.THOST_FTDC_EIDT_SSE = 'A'
// 深圳证券交易所
defineDict.THOST_FTDC_EIDT_SZSE = 'E'

typedefDict.TThostFtdcExchangeIDTypeType = 'char'

// TFtdcExClientIDTypeType是一个交易编码类型类型
// 套保
defineDict.THOST_FTDC_ECIDT_Hedge = '1'
// 套利
defineDict.THOST_FTDC_ECIDT_Arbitrage = '2'
// 投机
defineDict.THOST_FTDC_ECIDT_Speculation = '3'

typedefDict.TThostFtdcExClientIDTypeType = 'char'

// TFtdcClientClassifyType是一个客户分类码类型
typedefDict.TThostFtdcClientClassifyType = 'string'

// TFtdcUOAOrganTypeType是一个单位性质类型
typedefDict.TThostFtdcUOAOrganTypeType = 'string'

// TFtdcUOACountryCodeType是一个国家代码类型
typedefDict.TThostFtdcUOACountryCodeType = 'string'

// TFtdcAreaCodeType是一个区号类型
typedefDict.TThostFtdcAreaCodeType = 'string'

// TFtdcFuturesIDType是一个监控中心为客户分配的代码类型
typedefDict.TThostFtdcFuturesIDType = 'string'

// TFtdcCffmcDateType是一个日期类型
typedefDict.TThostFtdcCffmcDateType = 'string'

// TFtdcCffmcTimeType是一个时间类型
typedefDict.TThostFtdcCffmcTimeType = 'string'

// TFtdcNocIDType是一个组织机构代码类型
typedefDict.TThostFtdcNocIDType = 'string'

// TFtdcUpdateFlagType是一个更新状态类型
// 未更新
defineDict.THOST_FTDC_UF_NoUpdate = '0'
// 更新全部信息成功
defineDict.THOST_FTDC_UF_Success = '1'
// 更新全部信息失败
defineDict.THOST_FTDC_UF_Fail = '2'
// 更新交易编码成功
defineDict.THOST_FTDC_UF_TCSuccess = '3'
// 更新交易编码失败
defineDict.THOST_FTDC_UF_TCFail = '4'
// 已丢弃
defineDict.THOST_FTDC_UF_Cancel = '5'

typedefDict.TThostFtdcUpdateFlagType = 'char'

// TFtdcApplyOperateIDType是一个申请动作类型
// 开户
defineDict.THOST_FTDC_AOID_OpenInvestor = '1'
// 修改身份信息
defineDict.THOST_FTDC_AOID_ModifyIDCard = '2'
// 修改一般信息
defineDict.THOST_FTDC_AOID_ModifyNoIDCard = '3'
// 申请交易编码
defineDict.THOST_FTDC_AOID_ApplyTradingCode = '4'
// 撤销交易编码
defineDict.THOST_FTDC_AOID_CancelTradingCode = '5'
// 销户
defineDict.THOST_FTDC_AOID_CancelInvestor = '6'
// 账户休眠
defineDict.THOST_FTDC_AOID_FreezeAccount = '8'
// 激活休眠账户
defineDict.THOST_FTDC_AOID_ActiveFreezeAccount = '9'

typedefDict.TThostFtdcApplyOperateIDType = 'char'

// TFtdcApplyStatusIDType是一个申请状态类型
// 未补全
defineDict.THOST_FTDC_ASID_NoComplete = '1'
// 已提交
defineDict.THOST_FTDC_ASID_Submited = '2'
// 已审核
defineDict.THOST_FTDC_ASID_Checked = '3'
// 已拒绝
defineDict.THOST_FTDC_ASID_Refused = '4'
// 已删除
defineDict.THOST_FTDC_ASID_Deleted = '5'

typedefDict.TThostFtdcApplyStatusIDType = 'char'

// TFtdcSendMethodType是一个发送方式类型
// 文件发送
defineDict.THOST_FTDC_UOASM_ByAPI = '1'
// 电子发送
defineDict.THOST_FTDC_UOASM_ByFile = '2'

typedefDict.TThostFtdcSendMethodType = 'char'

// TFtdcEventTypeType是一个业务操作类型类型
typedefDict.TThostFtdcEventTypeType = 'string'

// TFtdcEventModeType是一个操作方法类型
// 增加
defineDict.THOST_FTDC_EvM_ADD = '1'
// 修改
defineDict.THOST_FTDC_EvM_UPDATE = '2'
// 删除
defineDict.THOST_FTDC_EvM_DELETE = '3'
// 复核
defineDict.THOST_FTDC_EvM_CHECK = '4'
// 复制
defineDict.THOST_FTDC_EvM_COPY = '5'
// 注销
defineDict.THOST_FTDC_EvM_CANCEL = '6'
// 冲销
defineDict.THOST_FTDC_EvM_Reverse = '7'

typedefDict.TThostFtdcEventModeType = 'char'

// TFtdcUOAAutoSendType是一个统一开户申请自动发送类型
// 自动发送并接收
defineDict.THOST_FTDC_UOAA_ASR = '1'
// 自动发送，不自动接收
defineDict.THOST_FTDC_UOAA_ASNR = '2'
// 不自动发送，自动接收
defineDict.THOST_FTDC_UOAA_NSAR = '3'
// 不自动发送，也不自动接收
defineDict.THOST_FTDC_UOAA_NSR = '4'

typedefDict.TThostFtdcUOAAutoSendType = 'char'

// TFtdcQueryDepthType是一个查询深度类型
typedefDict.TThostFtdcQueryDepthType = 'int'

// TFtdcDataCenterIDType是一个数据中心代码类型
typedefDict.TThostFtdcDataCenterIDType = 'int'

// TFtdcFlowIDType是一个流程ID类型
// 投资者对应投资者组设置
defineDict.THOST_FTDC_EvM_InvestorGroupFlow = '1'
// 投资者手续费率设置
defineDict.THOST_FTDC_EvM_InvestorRate = '2'
// 投资者手续费率模板关系设置
defineDict.THOST_FTDC_EvM_InvestorCommRateModel = '3'

typedefDict.TThostFtdcFlowIDType = 'char'

// TFtdcCheckLevelType是一个复核级别类型
// 零级复核
defineDict.THOST_FTDC_CL_Zero = '0'
// 一级复核
defineDict.THOST_FTDC_CL_One = '1'
// 二级复核
defineDict.THOST_FTDC_CL_Two = '2'

typedefDict.TThostFtdcCheckLevelType = 'char'

// TFtdcCheckNoType是一个操作次数类型
typedefDict.TThostFtdcCheckNoType = 'int'

// TFtdcCheckStatusType是一个复核级别类型
// 未复核
defineDict.THOST_FTDC_CHS_Init = '0'
// 复核中
defineDict.THOST_FTDC_CHS_Checking = '1'
// 已复核
defineDict.THOST_FTDC_CHS_Checked = '2'
// 拒绝
defineDict.THOST_FTDC_CHS_Refuse = '3'
// 作废
defineDict.THOST_FTDC_CHS_Cancel = '4'

typedefDict.TThostFtdcCheckStatusType = 'char'

// TFtdcUsedStatusType是一个生效状态类型
// 未生效
defineDict.THOST_FTDC_CHU_Unused = '0'
// 已生效
defineDict.THOST_FTDC_CHU_Used = '1'
// 生效失败
defineDict.THOST_FTDC_CHU_Fail = '2'

typedefDict.TThostFtdcUsedStatusType = 'char'

// TFtdcRateTemplateNameType是一个模型名称类型
typedefDict.TThostFtdcRateTemplateNameType = 'string'

// TFtdcPropertyStringType是一个用于查询的投资属性字段类型
typedefDict.TThostFtdcPropertyStringType = 'string'

// TFtdcBankAcountOriginType是一个账户来源类型
// 手工录入
defineDict.THOST_FTDC_BAO_ByAccProperty = '0'
// 银期转账
defineDict.THOST_FTDC_BAO_ByFBTransfer = '1'

typedefDict.TThostFtdcBankAcountOriginType = 'char'

// TFtdcMonthBillTradeSumType是一个结算单月报成交汇总方式类型
// 同日同合约
defineDict.THOST_FTDC_MBTS_ByInstrument = '0'
// 同日同合约同价格
defineDict.THOST_FTDC_MBTS_ByDayInsPrc = '1'
// 同合约
defineDict.THOST_FTDC_MBTS_ByDayIns = '2'

typedefDict.TThostFtdcMonthBillTradeSumType = 'char'

// TFtdcFBTTradeCodeEnumType是一个银期交易代码枚举类型
// 银行发起银行转期货
defineDict.THOST_FTDC_FTC_BankLaunchBankToBroker = '102001'
// 期货发起银行转期货
defineDict.THOST_FTDC_FTC_BrokerLaunchBankToBroker = '202001'
// 银行发起期货转银行
defineDict.THOST_FTDC_FTC_BankLaunchBrokerToBank = '102002'
// 期货发起期货转银行
defineDict.THOST_FTDC_FTC_BrokerLaunchBrokerToBank = '202002'

typedefDict.TThostFtdcFBTTradeCodeEnumType = 'char'

// TFtdcRateTemplateIDType是一个模型代码类型
typedefDict.TThostFtdcRateTemplateIDType = 'string'

// TFtdcRiskRateType是一个风险度类型
typedefDict.TThostFtdcRiskRateType = 'string'

// TFtdcTimestampType是一个时间戳类型
typedefDict.TThostFtdcTimestampType = 'int'

// TFtdcInvestorIDRuleNameType是一个号段规则名称类型
typedefDict.TThostFtdcInvestorIDRuleNameType = 'string'

// TFtdcInvestorIDRuleExprType是一个号段规则表达式类型
typedefDict.TThostFtdcInvestorIDRuleExprType = 'string'

// TFtdcLastDriftType是一个上次OTP漂移值类型
typedefDict.TThostFtdcLastDriftType = 'int'

// TFtdcLastSuccessType是一个上次OTP成功值类型
typedefDict.TThostFtdcLastSuccessType = 'int'

// TFtdcAuthKeyType是一个令牌密钥类型
typedefDict.TThostFtdcAuthKeyType = 'string'

// TFtdcSerialNumberType是一个序列号类型
typedefDict.TThostFtdcSerialNumberType = 'string'

// TFtdcOTPTypeType是一个动态令牌类型类型
// 无动态令牌
defineDict.THOST_FTDC_OTP_NONE = '0'
// 时间令牌
defineDict.THOST_FTDC_OTP_TOTP = '1'

typedefDict.TThostFtdcOTPTypeType = 'char'

// TFtdcOTPVendorsIDType是一个动态令牌提供商类型
typedefDict.TThostFtdcOTPVendorsIDType = 'string'

// TFtdcOTPVendorsNameType是一个动态令牌提供商名称类型
typedefDict.TThostFtdcOTPVendorsNameType = 'string'

// TFtdcOTPStatusType是一个动态令牌状态类型
// 未使用
defineDict.THOST_FTDC_OTPS_Unused = '0'
// 已使用
defineDict.THOST_FTDC_OTPS_Used = '1'
// 注销
defineDict.THOST_FTDC_OTPS_Disuse = '2'

typedefDict.TThostFtdcOTPStatusType = 'char'

// TFtdcBrokerUserTypeType是一个经济公司用户类型类型
// 投资者
defineDict.THOST_FTDC_BUT_Investor = '1'
// 操作员
defineDict.THOST_FTDC_BUT_BrokerUser = '2'

typedefDict.TThostFtdcBrokerUserTypeType = 'char'

// TFtdcFutureTypeType是一个期货类型类型
// 商品期货
defineDict.THOST_FTDC_FUTT_Commodity = '1'
// 金融期货
defineDict.THOST_FTDC_FUTT_Financial = '2'

typedefDict.TThostFtdcFutureTypeType = 'char'

// TFtdcFundEventTypeType是一个资金管理操作类型类型
// 转账限额
defineDict.THOST_FTDC_FET_Restriction = '0'
// 当日转账限额
defineDict.THOST_FTDC_FET_TodayRestriction = '1'
// 期商流水
defineDict.THOST_FTDC_FET_Transfer = '2'
// 资金冻结
defineDict.THOST_FTDC_FET_Credit = '3'
// 投资者可提资金比例
defineDict.THOST_FTDC_FET_InvestorWithdrawAlm = '4'
// 单个银行帐户转账限额
defineDict.THOST_FTDC_FET_BankRestriction = '5'
// 银期签约账户
defineDict.THOST_FTDC_FET_Accountregister = '6'
// 交易所出入金
defineDict.THOST_FTDC_FET_ExchangeFundIO = '7'
// 投资者出入金
defineDict.THOST_FTDC_FET_InvestorFundIO = '8'

typedefDict.TThostFtdcFundEventTypeType = 'char'

// TFtdcAccountSourceTypeType是一个资金账户来源类型
// 银期同步
defineDict.THOST_FTDC_AST_FBTransfer = '0'
// 手工录入
defineDict.THOST_FTDC_AST_ManualEntry = '1'

typedefDict.TThostFtdcAccountSourceTypeType = 'char'

// TFtdcCodeSourceTypeType是一个交易编码来源类型
// 统一开户(已规范)
defineDict.THOST_FTDC_CST_UnifyAccount = '0'
// 手工录入(未规范)
defineDict.THOST_FTDC_CST_ManualEntry = '1'

typedefDict.TThostFtdcCodeSourceTypeType = 'char'

// TFtdcUserRangeType是一个操作员范围类型
// 所有
defineDict.THOST_FTDC_UR_All = '0'
// 单一操作员
defineDict.THOST_FTDC_UR_Single = '1'

typedefDict.TThostFtdcUserRangeType = 'char'

// TFtdcTimeSpanType是一个时间跨度类型
typedefDict.TThostFtdcTimeSpanType = 'string'

// TFtdcImportSequenceIDType是一个动态令牌导入批次编号类型
typedefDict.TThostFtdcImportSequenceIDType = 'string'

// TFtdcByGroupType是一个交易统计表按客户统计方式类型
// 按投资者统计
defineDict.THOST_FTDC_BG_Investor = '2'
// 按类统计
defineDict.THOST_FTDC_BG_Group = '1'

typedefDict.TThostFtdcByGroupType = 'char'

// TFtdcTradeSumStatModeType是一个交易统计表按范围统计方式类型
// 按合约统计
defineDict.THOST_FTDC_TSSM_Instrument = '1'
// 按产品统计
defineDict.THOST_FTDC_TSSM_Product = '2'
// 按交易所统计
defineDict.THOST_FTDC_TSSM_Exchange = '3'

typedefDict.TThostFtdcTradeSumStatModeType = 'char'

// TFtdcComTypeType是一个组合成交类型类型
typedefDict.TThostFtdcComTypeType = 'int'

// TFtdcUserProductIDType是一个产品标识类型
typedefDict.TThostFtdcUserProductIDType = 'string'

// TFtdcUserProductNameType是一个产品名称类型
typedefDict.TThostFtdcUserProductNameType = 'string'

// TFtdcUserProductMemoType是一个产品说明类型
typedefDict.TThostFtdcUserProductMemoType = 'string'

// TFtdcCSRCCancelFlagType是一个新增或变更标志类型
typedefDict.TThostFtdcCSRCCancelFlagType = 'string'

// TFtdcCSRCDateType是一个日期类型
typedefDict.TThostFtdcCSRCDateType = 'string'

// TFtdcCSRCInvestorNameType是一个客户名称类型
typedefDict.TThostFtdcCSRCInvestorNameType = 'string'

// TFtdcCSRCOpenInvestorNameType是一个客户名称类型
typedefDict.TThostFtdcCSRCOpenInvestorNameType = 'string'

// TFtdcCSRCInvestorIDType是一个客户代码类型
typedefDict.TThostFtdcCSRCInvestorIDType = 'string'

// TFtdcCSRCIdentifiedCardNoType是一个证件号码类型
typedefDict.TThostFtdcCSRCIdentifiedCardNoType = 'string'

// TFtdcCSRCClientIDType是一个交易编码类型
typedefDict.TThostFtdcCSRCClientIDType = 'string'

// TFtdcCSRCBankFlagType是一个银行标识类型
typedefDict.TThostFtdcCSRCBankFlagType = 'string'

// TFtdcCSRCBankAccountType是一个银行账户类型
typedefDict.TThostFtdcCSRCBankAccountType = 'string'

// TFtdcCSRCOpenNameType是一个开户人类型
typedefDict.TThostFtdcCSRCOpenNameType = 'string'

// TFtdcCSRCMemoType是一个说明类型
typedefDict.TThostFtdcCSRCMemoType = 'string'

// TFtdcCSRCTimeType是一个时间类型
typedefDict.TThostFtdcCSRCTimeType = 'string'

// TFtdcCSRCTradeIDType是一个成交流水号类型
typedefDict.TThostFtdcCSRCTradeIDType = 'string'

// TFtdcCSRCExchangeInstIDType是一个合约代码类型
typedefDict.TThostFtdcCSRCExchangeInstIDType = 'string'

// TFtdcCSRCMortgageNameType是一个质押品名称类型
typedefDict.TThostFtdcCSRCMortgageNameType = 'string'

// TFtdcCSRCReasonType是一个事由类型
typedefDict.TThostFtdcCSRCReasonType = 'string'

// TFtdcIsSettlementType是一个是否为非结算会员类型
typedefDict.TThostFtdcIsSettlementType = 'string'

// TFtdcCSRCMoneyType是一个资金类型
typedefDict.TThostFtdcCSRCMoneyType = 'float'

// TFtdcCSRCPriceType是一个价格类型
typedefDict.TThostFtdcCSRCPriceType = 'float'

// TFtdcCSRCOptionsTypeType是一个期权类型类型
typedefDict.TThostFtdcCSRCOptionsTypeType = 'string'

// TFtdcCSRCStrikePriceType是一个执行价类型
typedefDict.TThostFtdcCSRCStrikePriceType = 'float'

// TFtdcCSRCTargetProductIDType是一个标的品种类型
typedefDict.TThostFtdcCSRCTargetProductIDType = 'string'

// TFtdcCSRCTargetInstrIDType是一个标的合约类型
typedefDict.TThostFtdcCSRCTargetInstrIDType = 'string'

// TFtdcCommModelNameType是一个手续费率模板名称类型
typedefDict.TThostFtdcCommModelNameType = 'string'

// TFtdcCommModelMemoType是一个手续费率模板备注类型
typedefDict.TThostFtdcCommModelMemoType = 'string'

// TFtdcExprSetModeType是一个日期表达式设置类型类型
// 相对已有规则设置
defineDict.THOST_FTDC_ESM_Relative = '1'
// 典型设置
defineDict.THOST_FTDC_ESM_Typical = '2'

typedefDict.TThostFtdcExprSetModeType = 'char'

// TFtdcRateInvestorRangeType是一个投资者范围类型
// 公司标准
defineDict.THOST_FTDC_RIR_All = '1'
// 模板
defineDict.THOST_FTDC_RIR_Model = '2'
// 单一投资者
defineDict.THOST_FTDC_RIR_Single = '3'

typedefDict.TThostFtdcRateInvestorRangeType = 'char'

// TFtdcAgentBrokerIDType是一个代理经纪公司代码类型
typedefDict.TThostFtdcAgentBrokerIDType = 'string'

// TFtdcDRIdentityIDType是一个交易中心代码类型
typedefDict.TThostFtdcDRIdentityIDType = 'int'

// TFtdcDRIdentityNameType是一个交易中心名称类型
typedefDict.TThostFtdcDRIdentityNameType = 'string'

// TFtdcDBLinkIDType是一个DBLink标识号类型
typedefDict.TThostFtdcDBLinkIDType = 'string'

// TFtdcSyncDataStatusType是一个主次用系统数据同步状态类型
// 未同步
defineDict.THOST_FTDC_SDS_Initialize = '0'
// 同步中
defineDict.THOST_FTDC_SDS_Settlementing = '1'
// 已同步
defineDict.THOST_FTDC_SDS_Settlemented = '2'

typedefDict.TThostFtdcSyncDataStatusType = 'char'

// TFtdcTradeSourceType是一个成交来源类型
// 来自交易所普通回报
defineDict.THOST_FTDC_TSRC_NORMAL = '0'
// 来自查询
defineDict.THOST_FTDC_TSRC_QUERY = '1'

typedefDict.TThostFtdcTradeSourceType = 'char'

// TFtdcFlexStatModeType是一个产品合约统计方式类型
// 产品统计
defineDict.THOST_FTDC_FSM_Product = '1'
// 交易所统计
defineDict.THOST_FTDC_FSM_Exchange = '2'
// 统计所有
defineDict.THOST_FTDC_FSM_All = '3'

typedefDict.TThostFtdcFlexStatModeType = 'char'

// TFtdcByInvestorRangeType是一个投资者范围统计方式类型
// 属性统计
defineDict.THOST_FTDC_BIR_Property = '1'
// 统计所有
defineDict.THOST_FTDC_BIR_All = '2'

typedefDict.TThostFtdcByInvestorRangeType = 'char'

// TFtdcSRiskRateType是一个风险度类型
typedefDict.TThostFtdcSRiskRateType = 'string'

// TFtdcSequenceNo12Type是一个序号类型
typedefDict.TThostFtdcSequenceNo12Type = 'int'

// TFtdcPropertyInvestorRangeType是一个投资者范围类型
// 所有
defineDict.THOST_FTDC_PIR_All = '1'
// 投资者属性
defineDict.THOST_FTDC_PIR_Property = '2'
// 单一投资者
defineDict.THOST_FTDC_PIR_Single = '3'

typedefDict.TThostFtdcPropertyInvestorRangeType = 'char'

// TFtdcFileStatusType是一个文件状态类型
// 未生成
defineDict.THOST_FTDC_FIS_NoCreate = '0'
// 已生成
defineDict.THOST_FTDC_FIS_Created = '1'
// 生成失败
defineDict.THOST_FTDC_FIS_Failed = '2'

typedefDict.TThostFtdcFileStatusType = 'char'

// TFtdcFileGenStyleType是一个文件生成方式类型
// 下发
defineDict.THOST_FTDC_FGS_FileTransmit = '0'
// 生成
defineDict.THOST_FTDC_FGS_FileGen = '1'

typedefDict.TThostFtdcFileGenStyleType = 'char'

// TFtdcSysOperModeType是一个系统日志操作方法类型
// 增加
defineDict.THOST_FTDC_SoM_Add = '1'
// 修改
defineDict.THOST_FTDC_SoM_Update = '2'
// 删除
defineDict.THOST_FTDC_SoM_Delete = '3'
// 复制
defineDict.THOST_FTDC_SoM_Copy = '4'
// 激活
defineDict.THOST_FTDC_SoM_AcTive = '5'
// 注销
defineDict.THOST_FTDC_SoM_CanCel = '6'
// 重置
defineDict.THOST_FTDC_SoM_ReSet = '7'

typedefDict.TThostFtdcSysOperModeType = 'char'

// TFtdcSysOperTypeType是一个系统日志操作类型类型
// 修改操作员密码
defineDict.THOST_FTDC_SoT_UpdatePassword = '0'
// 操作员组织架构关系
defineDict.THOST_FTDC_SoT_UserDepartment = '1'
// 角色管理
defineDict.THOST_FTDC_SoT_RoleManager = '2'
// 角色功能设置
defineDict.THOST_FTDC_SoT_RoleFunction = '3'
// 基础参数设置
defineDict.THOST_FTDC_SoT_BaseParam = '4'
// 设置操作员
defineDict.THOST_FTDC_SoT_SetUserID = '5'
// 用户角色设置
defineDict.THOST_FTDC_SoT_SetUserRole = '6'
// 用户IP限制
defineDict.THOST_FTDC_SoT_UserIpRestriction = '7'
// 组织架构管理
defineDict.THOST_FTDC_SoT_DepartmentManager = '8'
// 组织架构向查询分类复制
defineDict.THOST_FTDC_SoT_DepartmentCopy = '9'
// 交易编码管理
defineDict.THOST_FTDC_SoT_Tradingcode = 'A'
// 投资者状态维护
defineDict.THOST_FTDC_SoT_InvestorStatus = 'B'
// 投资者权限管理
defineDict.THOST_FTDC_SoT_InvestorAuthority = 'C'
// 属性设置
defineDict.THOST_FTDC_SoT_PropertySet = 'D'
// 重置投资者密码
defineDict.THOST_FTDC_SoT_ReSetInvestorPasswd = 'E'
// 投资者个性信息维护
defineDict.THOST_FTDC_SoT_InvestorPersonalityInfo = 'F'

typedefDict.TThostFtdcSysOperTypeType = 'char'

// TFtdcCSRCDataQueyTypeType是一个上报数据查询类型类型
// 查询当前交易日报送的数据
defineDict.THOST_FTDC_CSRCQ_Current = '0'
// 查询历史报送的代理经纪公司的数据
defineDict.THOST_FTDC_CSRCQ_History = '1'

typedefDict.TThostFtdcCSRCDataQueyTypeType = 'char'

// TFtdcFreezeStatusType是一个休眠状态类型
// 活跃
defineDict.THOST_FTDC_FRS_Normal = '1'
// 休眠
defineDict.THOST_FTDC_FRS_Freeze = '0'

typedefDict.TThostFtdcFreezeStatusType = 'char'

// TFtdcStandardStatusType是一个规范状态类型
// 已规范
defineDict.THOST_FTDC_STST_Standard = '0'
// 未规范
defineDict.THOST_FTDC_STST_NonStandard = '1'

typedefDict.TThostFtdcStandardStatusType = 'char'

// TFtdcCSRCFreezeStatusType是一个休眠状态类型
typedefDict.TThostFtdcCSRCFreezeStatusType = 'string'

// TFtdcRightParamTypeType是一个配置类型类型
// 休眠户
defineDict.THOST_FTDC_RPT_Freeze = '1'
// 激活休眠户
defineDict.THOST_FTDC_RPT_FreezeActive = '2'
// 开仓权限限制
defineDict.THOST_FTDC_RPT_OpenLimit = '3'
// 解除开仓权限限制
defineDict.THOST_FTDC_RPT_RelieveOpenLimit = '4'

typedefDict.TThostFtdcRightParamTypeType = 'char'

// TFtdcRightTemplateIDType是一个模板代码类型
typedefDict.TThostFtdcRightTemplateIDType = 'string'

// TFtdcRightTemplateNameType是一个模板名称类型
typedefDict.TThostFtdcRightTemplateNameType = 'string'

// TFtdcDataStatusType是一个反洗钱审核表数据状态类型
// 正常
defineDict.THOST_FTDC_AMLDS_Normal = '0'
// 已删除
defineDict.THOST_FTDC_AMLDS_Deleted = '1'

typedefDict.TThostFtdcDataStatusType = 'char'

// TFtdcAMLCheckStatusType是一个审核状态类型
// 未复核
defineDict.THOST_FTDC_AMLCHS_Init = '0'
// 复核中
defineDict.THOST_FTDC_AMLCHS_Checking = '1'
// 已复核
defineDict.THOST_FTDC_AMLCHS_Checked = '2'
// 拒绝上报
defineDict.THOST_FTDC_AMLCHS_RefuseReport = '3'

typedefDict.TThostFtdcAMLCheckStatusType = 'char'

// TFtdcAmlDateTypeType是一个日期类型类型
// 检查日期
defineDict.THOST_FTDC_AMLDT_DrawDay = '0'
// 发生日期
defineDict.THOST_FTDC_AMLDT_TouchDay = '1'

typedefDict.TThostFtdcAmlDateTypeType = 'char'

// TFtdcAmlCheckLevelType是一个审核级别类型
// 零级审核
defineDict.THOST_FTDC_AMLCL_CheckLevel0 = '0'
// 一级审核
defineDict.THOST_FTDC_AMLCL_CheckLevel1 = '1'
// 二级审核
defineDict.THOST_FTDC_AMLCL_CheckLevel2 = '2'
// 三级审核
defineDict.THOST_FTDC_AMLCL_CheckLevel3 = '3'

typedefDict.TThostFtdcAmlCheckLevelType = 'char'

// TFtdcAmlCheckFlowType是一个反洗钱数据抽取审核流程类型
typedefDict.TThostFtdcAmlCheckFlowType = 'string'

// TFtdcDataTypeType是一个数据类型类型
typedefDict.TThostFtdcDataTypeType = 'string'

// TFtdcExportFileTypeType是一个导出文件类型类型
// CSV
defineDict.THOST_FTDC_EFT_CSV = '0'
// Excel
defineDict.THOST_FTDC_EFT_EXCEL = '1'
// DBF
defineDict.THOST_FTDC_EFT_DBF = '2'

typedefDict.TThostFtdcExportFileTypeType = 'char'

// TFtdcSettleManagerTypeType是一个结算配置类型类型
// 结算前准备
defineDict.THOST_FTDC_SMT_Before = '1'
// 结算
defineDict.THOST_FTDC_SMT_Settlement = '2'
// 结算后核对
defineDict.THOST_FTDC_SMT_After = '3'
// 结算后处理
defineDict.THOST_FTDC_SMT_Settlemented = '4'

typedefDict.TThostFtdcSettleManagerTypeType = 'char'

// TFtdcSettleManagerIDType是一个结算配置代码类型
typedefDict.TThostFtdcSettleManagerIDType = 'string'

// TFtdcSettleManagerNameType是一个结算配置名称类型
typedefDict.TThostFtdcSettleManagerNameType = 'string'

// TFtdcSettleManagerLevelType是一个结算配置等级类型
// 必要
defineDict.THOST_FTDC_SML_Must = '1'
// 警告
defineDict.THOST_FTDC_SML_Alarm = '2'
// 提示
defineDict.THOST_FTDC_SML_Prompt = '3'
// 不检查
defineDict.THOST_FTDC_SML_Ignore = '4'

typedefDict.TThostFtdcSettleManagerLevelType = 'char'

// TFtdcSettleManagerGroupType是一个模块分组类型
// 交易所核对
defineDict.THOST_FTDC_SMG_Exhcange = '1'
// 内部核对
defineDict.THOST_FTDC_SMG_ASP = '2'
// 上报数据核对
defineDict.THOST_FTDC_SMG_CSRC = '3'

typedefDict.TThostFtdcSettleManagerGroupType = 'char'

// TFtdcCheckResultMemoType是一个核对结果说明类型
typedefDict.TThostFtdcCheckResultMemoType = 'string'

// TFtdcFunctionUrlType是一个功能链接类型
typedefDict.TThostFtdcFunctionUrlType = 'string'

// TFtdcAuthInfoType是一个客户端认证信息类型
typedefDict.TThostFtdcAuthInfoType = 'string'

// TFtdcAuthCodeType是一个客户端认证码类型
typedefDict.TThostFtdcAuthCodeType = 'string'

// TFtdcLimitUseTypeType是一个保值额度使用类型类型
// 可重复使用
defineDict.THOST_FTDC_LUT_Repeatable = '1'
// 不可重复使用
defineDict.THOST_FTDC_LUT_Unrepeatable = '2'

typedefDict.TThostFtdcLimitUseTypeType = 'char'

// TFtdcDataResourceType是一个数据来源类型
// 本系统
defineDict.THOST_FTDC_DAR_Settle = '1'
// 交易所
defineDict.THOST_FTDC_DAR_Exchange = '2'
// 报送数据
defineDict.THOST_FTDC_DAR_CSRC = '3'

typedefDict.TThostFtdcDataResourceType = 'char'

// TFtdcMarginTypeType是一个保证金类型类型
// 交易所保证金率
defineDict.THOST_FTDC_MGT_ExchMarginRate = '0'
// 投资者保证金率
defineDict.THOST_FTDC_MGT_InstrMarginRate = '1'
// 投资者交易保证金率
defineDict.THOST_FTDC_MGT_InstrMarginRateTrade = '2'

typedefDict.TThostFtdcMarginTypeType = 'char'

// TFtdcActiveTypeType是一个生效类型类型
// 仅当日生效
defineDict.THOST_FTDC_ACT_Intraday = '1'
// 长期生效
defineDict.THOST_FTDC_ACT_Long = '2'

typedefDict.TThostFtdcActiveTypeType = 'char'

// TFtdcMarginRateTypeType是一个冲突保证金率类型类型
// 交易所保证金率
defineDict.THOST_FTDC_MRT_Exchange = '1'
// 投资者保证金率
defineDict.THOST_FTDC_MRT_Investor = '2'
// 投资者交易保证金率
defineDict.THOST_FTDC_MRT_InvestorTrade = '3'

typedefDict.TThostFtdcMarginRateTypeType = 'char'

// TFtdcBackUpStatusType是一个备份数据状态类型
// 未生成备份数据
defineDict.THOST_FTDC_BUS_UnBak = '0'
// 备份数据生成中
defineDict.THOST_FTDC_BUS_BakUp = '1'
// 已生成备份数据
defineDict.THOST_FTDC_BUS_BakUped = '2'
// 备份数据失败
defineDict.THOST_FTDC_BUS_BakFail = '3'

typedefDict.TThostFtdcBackUpStatusType = 'char'

// TFtdcInitSettlementType是一个结算初始化状态类型
// 结算初始化未开始
defineDict.THOST_FTDC_SIS_UnInitialize = '0'
// 结算初始化中
defineDict.THOST_FTDC_SIS_Initialize = '1'
// 结算初始化完成
defineDict.THOST_FTDC_SIS_Initialized = '2'

typedefDict.TThostFtdcInitSettlementType = 'char'

// TFtdcReportStatusType是一个报表数据生成状态类型
// 未生成报表数据
defineDict.THOST_FTDC_SRS_NoCreate = '0'
// 报表数据生成中
defineDict.THOST_FTDC_SRS_Create = '1'
// 已生成报表数据
defineDict.THOST_FTDC_SRS_Created = '2'
// 生成报表数据失败
defineDict.THOST_FTDC_SRS_CreateFail = '3'

typedefDict.TThostFtdcReportStatusType = 'char'

// TFtdcSaveStatusType是一个数据归档状态类型
// 归档未完成
defineDict.THOST_FTDC_SSS_UnSaveData = '0'
// 归档完成
defineDict.THOST_FTDC_SSS_SaveDatad = '1'

typedefDict.TThostFtdcSaveStatusType = 'char'

// TFtdcSettArchiveStatusType是一个结算确认数据归档状态类型
// 未归档数据
defineDict.THOST_FTDC_SAS_UnArchived = '0'
// 数据归档中
defineDict.THOST_FTDC_SAS_Archiving = '1'
// 已归档数据
defineDict.THOST_FTDC_SAS_Archived = '2'
// 归档数据失败
defineDict.THOST_FTDC_SAS_ArchiveFail = '3'

typedefDict.TThostFtdcSettArchiveStatusType = 'char'

// TFtdcCTPTypeType是一个CTP交易系统类型类型
// 未知类型
defineDict.THOST_FTDC_CTPT_Unkown = '0'
// 主中心
defineDict.THOST_FTDC_CTPT_MainCenter = '1'
// 备中心
defineDict.THOST_FTDC_CTPT_BackUp = '2'

typedefDict.TThostFtdcCTPTypeType = 'char'

// TFtdcToolIDType是一个工具代码类型
typedefDict.TThostFtdcToolIDType = 'string'

// TFtdcToolNameType是一个工具名称类型
typedefDict.TThostFtdcToolNameType = 'string'

// TFtdcCloseDealTypeType是一个平仓处理类型类型
// 正常
defineDict.THOST_FTDC_CDT_Normal = '0'
// 投机平仓优先
defineDict.THOST_FTDC_CDT_SpecFirst = '1'

typedefDict.TThostFtdcCloseDealTypeType = 'char'

// TFtdcMortgageFundUseRangeType是一个货币质押资金可用范围类型
// 不能使用
defineDict.THOST_FTDC_MFUR_None = '0'
// 用于保证金
defineDict.THOST_FTDC_MFUR_Margin = '1'
// 用于手续费、盈亏、保证金
defineDict.THOST_FTDC_MFUR_All = '2'

typedefDict.TThostFtdcMortgageFundUseRangeType = 'char'

// TFtdcCurrencyUnitType是一个币种单位数量类型
typedefDict.TThostFtdcCurrencyUnitType = 'float'

// TFtdcExchangeRateType是一个汇率类型
typedefDict.TThostFtdcExchangeRateType = 'float'

// TFtdcSpecProductTypeType是一个特殊产品类型类型
// 郑商所套保产品
defineDict.THOST_FTDC_SPT_CzceHedge = '1'
// 货币质押产品
defineDict.THOST_FTDC_SPT_IneForeignCurrency = '2'
// 大连短线开平仓产品
defineDict.THOST_FTDC_SPT_DceOpenClose = '3'

typedefDict.TThostFtdcSpecProductTypeType = 'char'

// TFtdcFundMortgageTypeType是一个货币质押类型类型
// 质押
defineDict.THOST_FTDC_FMT_Mortgage = '1'
// 解质
defineDict.THOST_FTDC_FMT_Redemption = '2'

typedefDict.TThostFtdcFundMortgageTypeType = 'char'

// TFtdcAccountSettlementParamIDType是一个投资者账户结算参数代码类型
// 基础保证金
defineDict.THOST_FTDC_ASPI_BaseMargin = '1'
// 最低权益标准
defineDict.THOST_FTDC_ASPI_LowestInterest = '2'

typedefDict.TThostFtdcAccountSettlementParamIDType = 'char'

// TFtdcCurrencyNameType是一个币种名称类型
typedefDict.TThostFtdcCurrencyNameType = 'string'

// TFtdcCurrencySignType是一个币种符号类型
typedefDict.TThostFtdcCurrencySignType = 'string'

// TFtdcFundMortDirectionType是一个货币质押方向类型
// 货币质入
defineDict.THOST_FTDC_FMD_In = '1'
// 货币质出
defineDict.THOST_FTDC_FMD_Out = '2'

typedefDict.TThostFtdcFundMortDirectionType = 'char'

// TFtdcBusinessClassType是一个换汇类别类型
// 盈利
defineDict.THOST_FTDC_BT_Profit = '0'
// 亏损
defineDict.THOST_FTDC_BT_Loss = '1'
// 其他
defineDict.THOST_FTDC_BT_Other = 'Z'

typedefDict.TThostFtdcBusinessClassType = 'char'

// TFtdcSwapSourceTypeType是一个换汇数据来源类型
// 手工
defineDict.THOST_FTDC_SST_Manual = '0'
// 自动生成
defineDict.THOST_FTDC_SST_Automatic = '1'

typedefDict.TThostFtdcSwapSourceTypeType = 'char'

// TFtdcCurrExDirectionType是一个换汇类型类型
// 结汇
defineDict.THOST_FTDC_CED_Settlement = '0'
// 售汇
defineDict.THOST_FTDC_CED_Sale = '1'

typedefDict.TThostFtdcCurrExDirectionType = 'char'

// TFtdcCurrencySwapStatusType是一个申请状态类型
// 已录入
defineDict.THOST_FTDC_CSS_Entry = '1'
// 已审核
defineDict.THOST_FTDC_CSS_Approve = '2'
// 已拒绝
defineDict.THOST_FTDC_CSS_Refuse = '3'
// 已撤销
defineDict.THOST_FTDC_CSS_Revoke = '4'
// 已发送
defineDict.THOST_FTDC_CSS_Send = '5'
// 换汇成功
defineDict.THOST_FTDC_CSS_Success = '6'
// 换汇失败
defineDict.THOST_FTDC_CSS_Failure = '7'

typedefDict.TThostFtdcCurrencySwapStatusType = 'char'

// TFtdcCurrExchCertNoType是一个凭证号类型
typedefDict.TThostFtdcCurrExchCertNoType = 'string'

// TFtdcBatchSerialNoType是一个批次号类型
typedefDict.TThostFtdcBatchSerialNoType = 'string'

// TFtdcReqFlagType是一个换汇发送标志类型
// 未发送
defineDict.THOST_FTDC_REQF_NoSend = '0'
// 发送成功
defineDict.THOST_FTDC_REQF_SendSuccess = '1'
// 发送失败
defineDict.THOST_FTDC_REQF_SendFailed = '2'
// 等待重发
defineDict.THOST_FTDC_REQF_WaitReSend = '3'

typedefDict.TThostFtdcReqFlagType = 'char'

// TFtdcResFlagType是一个换汇返回成功标志类型
// 成功
defineDict.THOST_FTDC_RESF_Success = '0'
// 账户余额不足
defineDict.THOST_FTDC_RESF_InsuffiCient = '1'
// 交易结果未知
defineDict.THOST_FTDC_RESF_UnKnown = '8'

typedefDict.TThostFtdcResFlagType = 'char'

// TFtdcPageControlType是一个换汇页面控制类型
typedefDict.TThostFtdcPageControlType = 'string'

// TFtdcRecordCountType是一个记录数类型
typedefDict.TThostFtdcRecordCountType = 'int'

// TFtdcCurrencySwapMemoType是一个换汇需确认信息类型
typedefDict.TThostFtdcCurrencySwapMemoType = 'string'

// TFtdcExStatusType是一个修改状态类型
// 修改前
defineDict.THOST_FTDC_EXS_Before = '0'
// 修改后
defineDict.THOST_FTDC_EXS_After = '1'

typedefDict.TThostFtdcExStatusType = 'char'

// TFtdcClientRegionType是一个开户客户地域类型
// 国内客户
defineDict.THOST_FTDC_CR_Domestic = '1'
// 港澳台客户
defineDict.THOST_FTDC_CR_GMT = '2'
// 国外客户
defineDict.THOST_FTDC_CR_Foreign = '3'

typedefDict.TThostFtdcClientRegionType = 'char'

// TFtdcWorkPlaceType是一个工作单位类型
typedefDict.TThostFtdcWorkPlaceType = 'string'

// TFtdcBusinessPeriodType是一个经营期限类型
typedefDict.TThostFtdcBusinessPeriodType = 'string'

// TFtdcWebSiteType是一个网址类型
typedefDict.TThostFtdcWebSiteType = 'string'

// TFtdcUOAIdCardTypeType是一个统一开户证件类型类型
typedefDict.TThostFtdcUOAIdCardTypeType = 'string'

// TFtdcClientModeType是一个开户模式类型
typedefDict.TThostFtdcClientModeType = 'string'

// TFtdcInvestorFullNameType是一个投资者全称类型
typedefDict.TThostFtdcInvestorFullNameType = 'string'

// TFtdcUOABrokerIDType是一个境外中介机构ID类型
typedefDict.TThostFtdcUOABrokerIDType = 'string'

// TFtdcUOAZipCodeType是一个邮政编码类型
typedefDict.TThostFtdcUOAZipCodeType = 'string'

// TFtdcUOAEMailType是一个电子邮箱类型
typedefDict.TThostFtdcUOAEMailType = 'string'

// TFtdcOldCityType是一个城市类型
typedefDict.TThostFtdcOldCityType = 'string'

// TFtdcCorporateIdentifiedCardNoType是一个法人代表证件号码类型
typedefDict.TThostFtdcCorporateIdentifiedCardNoType = 'string'

// TFtdcHasBoardType是一个是否有董事会类型
// 没有
defineDict.THOST_FTDC_HB_No = '0'
// 有
defineDict.THOST_FTDC_HB_Yes = '1'

typedefDict.TThostFtdcHasBoardType = 'char'

// TFtdcStartModeType是一个启动模式类型
// 正常
defineDict.THOST_FTDC_SM_Normal = '1'
// 应急
defineDict.THOST_FTDC_SM_Emerge = '2'
// 恢复
defineDict.THOST_FTDC_SM_Restore = '3'

typedefDict.TThostFtdcStartModeType = 'char'

// TFtdcTemplateTypeType是一个模型类型类型
// 全量
defineDict.THOST_FTDC_TPT_Full = '1'
// 增量
defineDict.THOST_FTDC_TPT_Increment = '2'
// 备份
defineDict.THOST_FTDC_TPT_BackUp = '3'

typedefDict.TThostFtdcTemplateTypeType = 'char'

// TFtdcLoginModeType是一个登录模式类型
// 交易
defineDict.THOST_FTDC_LM_Trade = '0'
// 转账
defineDict.THOST_FTDC_LM_Transfer = '1'

typedefDict.TThostFtdcLoginModeType = 'char'

// TFtdcPromptTypeType是一个日历提示类型类型
// 合约上下市
defineDict.THOST_FTDC_CPT_Instrument = '1'
// 保证金分段生效
defineDict.THOST_FTDC_CPT_Margin = '2'

typedefDict.TThostFtdcPromptTypeType = 'char'

// TFtdcLedgerManageIDType是一个分户管理资产编码类型
typedefDict.TThostFtdcLedgerManageIDType = 'string'

// TFtdcInvestVarietyType是一个投资品种类型
typedefDict.TThostFtdcInvestVarietyType = 'string'

// TFtdcBankAccountTypeType是一个账户类别类型
typedefDict.TThostFtdcBankAccountTypeType = 'string'

// TFtdcLedgerManageBankType是一个开户银行类型
typedefDict.TThostFtdcLedgerManageBankType = 'string'

// TFtdcCffexDepartmentNameType是一个开户营业部类型
typedefDict.TThostFtdcCffexDepartmentNameType = 'string'

// TFtdcCffexDepartmentCodeType是一个营业部代码类型
typedefDict.TThostFtdcCffexDepartmentCodeType = 'string'

// TFtdcHasTrusteeType是一个是否有托管人类型
// 有
defineDict.THOST_FTDC_HT_Yes = '1'
// 没有
defineDict.THOST_FTDC_HT_No = '0'

typedefDict.TThostFtdcHasTrusteeType = 'char'

// TFtdcCSRCMemo1Type是一个说明类型
typedefDict.TThostFtdcCSRCMemo1Type = 'string'

// TFtdcAssetmgrCFullNameType是一个代理资产管理业务的期货公司全称类型
typedefDict.TThostFtdcAssetmgrCFullNameType = 'string'

// TFtdcAssetmgrApprovalNOType是一个资产管理业务批文号类型
typedefDict.TThostFtdcAssetmgrApprovalNOType = 'string'

// TFtdcAssetmgrMgrNameType是一个资产管理业务负责人姓名类型
typedefDict.TThostFtdcAssetmgrMgrNameType = 'string'

// TFtdcAmTypeType是一个机构类型类型
// 银行
defineDict.THOST_FTDC_AMT_Bank = '1'
// 证券公司
defineDict.THOST_FTDC_AMT_Securities = '2'
// 基金公司
defineDict.THOST_FTDC_AMT_Fund = '3'
// 保险公司
defineDict.THOST_FTDC_AMT_Insurance = '4'
// 信托公司
defineDict.THOST_FTDC_AMT_Trust = '5'
// 其他
defineDict.THOST_FTDC_AMT_Other = '9'

typedefDict.TThostFtdcAmTypeType = 'char'

// TFtdcCSRCAmTypeType是一个机构类型类型
typedefDict.TThostFtdcCSRCAmTypeType = 'string'

// TFtdcCSRCFundIOTypeType是一个出入金类型类型
// 出入金
defineDict.THOST_FTDC_CFIOT_FundIO = '0'
// 银期换汇
defineDict.THOST_FTDC_CFIOT_SwapCurrency = '1'

typedefDict.TThostFtdcCSRCFundIOTypeType = 'char'

// TFtdcCusAccountTypeType是一个结算账户类型类型
// 期货结算账户
defineDict.THOST_FTDC_CAT_Futures = '1'
// 纯期货资管业务下的资管结算账户
defineDict.THOST_FTDC_CAT_AssetmgrFuture = '2'
// 综合类资管业务下的期货资管托管账户
defineDict.THOST_FTDC_CAT_AssetmgrTrustee = '3'
// 综合类资管业务下的资金中转账户
defineDict.THOST_FTDC_CAT_AssetmgrTransfer = '4'

typedefDict.TThostFtdcCusAccountTypeType = 'char'

// TFtdcCSRCNationalType是一个国籍类型
typedefDict.TThostFtdcCSRCNationalType = 'string'

// TFtdcCSRCSecAgentIDType是一个二级代理ID类型
typedefDict.TThostFtdcCSRCSecAgentIDType = 'string'

// TFtdcLanguageTypeType是一个通知语言类型类型
// 中文
defineDict.THOST_FTDC_LT_Chinese = '1'
// 英文
defineDict.THOST_FTDC_LT_English = '2'

typedefDict.TThostFtdcLanguageTypeType = 'char'

// TFtdcAmAccountType是一个投资账户类型
typedefDict.TThostFtdcAmAccountType = 'string'

// TFtdcAssetmgrClientTypeType是一个资产管理客户类型类型
// 个人资管客户
defineDict.THOST_FTDC_AMCT_Person = '1'
// 单位资管客户
defineDict.THOST_FTDC_AMCT_Organ = '2'
// 特殊单位资管客户
defineDict.THOST_FTDC_AMCT_SpecialOrgan = '4'

typedefDict.TThostFtdcAssetmgrClientTypeType = 'char'

// TFtdcAssetmgrTypeType是一个投资类型类型
// 期货类
defineDict.THOST_FTDC_ASST_Futures = '3'
// 综合类
defineDict.THOST_FTDC_ASST_SpecialOrgan = '4'

typedefDict.TThostFtdcAssetmgrTypeType = 'char'

// TFtdcUOMType是一个计量单位类型
typedefDict.TThostFtdcUOMType = 'string'

// TFtdcSHFEInstLifePhaseType是一个上期所合约生命周期状态类型
typedefDict.TThostFtdcSHFEInstLifePhaseType = 'string'

// TFtdcSHFEProductClassType是一个产品类型类型
typedefDict.TThostFtdcSHFEProductClassType = 'string'

// TFtdcPriceDecimalType是一个价格小数位类型
typedefDict.TThostFtdcPriceDecimalType = 'string'

// TFtdcInTheMoneyFlagType是一个平值期权标志类型
typedefDict.TThostFtdcInTheMoneyFlagType = 'string'

// TFtdcCheckInstrTypeType是一个合约比较类型类型
// 合约交易所不存在
defineDict.THOST_FTDC_CIT_HasExch = '0'
// 合约本系统不存在
defineDict.THOST_FTDC_CIT_HasATP = '1'
// 合约比较不一致
defineDict.THOST_FTDC_CIT_HasDiff = '2'

typedefDict.TThostFtdcCheckInstrTypeType = 'char'

// TFtdcDeliveryTypeType是一个交割类型类型
// 手工交割
defineDict.THOST_FTDC_DT_HandDeliv = '1'
// 到期交割
defineDict.THOST_FTDC_DT_PersonDeliv = '2'

typedefDict.TThostFtdcDeliveryTypeType = 'char'

// TFtdcBigMoneyType是一个资金类型
typedefDict.TThostFtdcBigMoneyType = 'float'

// TFtdcMaxMarginSideAlgorithmType是一个大额单边保证金算法类型
// 不使用大额单边保证金算法
defineDict.THOST_FTDC_MMSA_NO = '0'
// 使用大额单边保证金算法
defineDict.THOST_FTDC_MMSA_YES = '1'

typedefDict.TThostFtdcMaxMarginSideAlgorithmType = 'char'

// TFtdcDAClientTypeType是一个资产管理客户类型类型
// 自然人
defineDict.THOST_FTDC_CACT_Person = '0'
// 法人
defineDict.THOST_FTDC_CACT_Company = '1'
// 其他
defineDict.THOST_FTDC_CACT_Other = '2'

typedefDict.TThostFtdcDAClientTypeType = 'char'

// TFtdcCombinInstrIDType是一个套利合约代码类型
typedefDict.TThostFtdcCombinInstrIDType = 'string'

// TFtdcCombinSettlePriceType是一个各腿结算价类型
typedefDict.TThostFtdcCombinSettlePriceType = 'string'

// TFtdcDCEPriorityType是一个优先级类型
typedefDict.TThostFtdcDCEPriorityType = 'int'

// TFtdcTradeGroupIDType是一个成交组号类型
typedefDict.TThostFtdcTradeGroupIDType = 'int'

// TFtdcIsCheckPrepaType是一个是否校验开户可用资金类型
typedefDict.TThostFtdcIsCheckPrepaType = 'int'

// TFtdcUOAAssetmgrTypeType是一个投资类型类型
// 期货类
defineDict.THOST_FTDC_UOAAT_Futures = '1'
// 综合类
defineDict.THOST_FTDC_UOAAT_SpecialOrgan = '2'

typedefDict.TThostFtdcUOAAssetmgrTypeType = 'char'

// TFtdcDirectionEnType是一个买卖方向类型
// Buy
defineDict.THOST_FTDC_DEN_Buy = '0'
// Sell
defineDict.THOST_FTDC_DEN_Sell = '1'

typedefDict.TThostFtdcDirectionEnType = 'char'

// TFtdcOffsetFlagEnType是一个开平标志类型
// Position Opening
defineDict.THOST_FTDC_OFEN_Open = '0'
// Position Close
defineDict.THOST_FTDC_OFEN_Close = '1'
// Forced Liquidation
defineDict.THOST_FTDC_OFEN_ForceClose = '2'
// Close Today
defineDict.THOST_FTDC_OFEN_CloseToday = '3'
// Close Prev.
defineDict.THOST_FTDC_OFEN_CloseYesterday = '4'
// Forced Reduction
defineDict.THOST_FTDC_OFEN_ForceOff = '5'
// Local Forced Liquidation
defineDict.THOST_FTDC_OFEN_LocalForceClose = '6'

typedefDict.TThostFtdcOffsetFlagEnType = 'char'

// TFtdcHedgeFlagEnType是一个投机套保标志类型
// Speculation
defineDict.THOST_FTDC_HFEN_Speculation = '1'
// Arbitrage
defineDict.THOST_FTDC_HFEN_Arbitrage = '2'
// Hedge
defineDict.THOST_FTDC_HFEN_Hedge = '3'

typedefDict.TThostFtdcHedgeFlagEnType = 'char'

// TFtdcFundIOTypeEnType是一个出入金类型类型
// Deposit/Withdrawal
defineDict.THOST_FTDC_FIOTEN_FundIO = '1'
// Bank-Futures Transfer
defineDict.THOST_FTDC_FIOTEN_Transfer = '2'
// Bank-Futures FX Exchange
defineDict.THOST_FTDC_FIOTEN_SwapCurrency = '3'

typedefDict.TThostFtdcFundIOTypeEnType = 'char'

// TFtdcFundTypeEnType是一个资金类型类型
// Bank Deposit
defineDict.THOST_FTDC_FTEN_Deposite = '1'
// Payment/Fee
defineDict.THOST_FTDC_FTEN_ItemFund = '2'
// Brokerage Adj
defineDict.THOST_FTDC_FTEN_Company = '3'
// Internal Transfer
defineDict.THOST_FTDC_FTEN_InnerTransfer = '4'

typedefDict.TThostFtdcFundTypeEnType = 'char'

// TFtdcFundDirectionEnType是一个出入金方向类型
// Deposit
defineDict.THOST_FTDC_FDEN_In = '1'
// Withdrawal
defineDict.THOST_FTDC_FDEN_Out = '2'

typedefDict.TThostFtdcFundDirectionEnType = 'char'

// TFtdcFundMortDirectionEnType是一个货币质押方向类型
// Pledge
defineDict.THOST_FTDC_FMDEN_In = '1'
// Redemption
defineDict.THOST_FTDC_FMDEN_Out = '2'

typedefDict.TThostFtdcFundMortDirectionEnType = 'char'

// TFtdcSwapBusinessTypeType是一个换汇业务种类类型
typedefDict.TThostFtdcSwapBusinessTypeType = 'string'

// TFtdcOptionsTypeType是一个期权类型类型
// 看涨
defineDict.THOST_FTDC_CP_CallOptions = '1'
// 看跌
defineDict.THOST_FTDC_CP_PutOptions = '2'

typedefDict.TThostFtdcOptionsTypeType = 'char'

// TFtdcStrikeModeType是一个执行方式类型
// 欧式
defineDict.THOST_FTDC_STM_Continental = '0'
// 美式
defineDict.THOST_FTDC_STM_American = '1'
// 百慕大
defineDict.THOST_FTDC_STM_Bermuda = '2'

typedefDict.TThostFtdcStrikeModeType = 'char'

// TFtdcStrikeTypeType是一个执行类型类型
// 自身对冲
defineDict.THOST_FTDC_STT_Hedge = '0'
// 匹配执行
defineDict.THOST_FTDC_STT_Match = '1'

typedefDict.TThostFtdcStrikeTypeType = 'char'

// TFtdcApplyTypeType是一个中金所期权放弃执行申请类型类型
// 不执行数量
defineDict.THOST_FTDC_APPT_NotStrikeNum = '4'

typedefDict.TThostFtdcApplyTypeType = 'char'

// TFtdcGiveUpDataSourceType是一个放弃执行申请数据来源类型
// 系统生成
defineDict.THOST_FTDC_GUDS_Gen = '0'
// 手工添加
defineDict.THOST_FTDC_GUDS_Hand = '1'

typedefDict.TThostFtdcGiveUpDataSourceType = 'char'

// TFtdcExecOrderSysIDType是一个执行宣告系统编号类型
typedefDict.TThostFtdcExecOrderSysIDType = 'string'

// TFtdcExecResultType是一个执行结果类型
// 没有执行
defineDict.THOST_FTDC_OER_NoExec = 'n'
// 已经取消
defineDict.THOST_FTDC_OER_Canceled = 'c'
// 执行成功
defineDict.THOST_FTDC_OER_OK = '0'
// 期权持仓不够
defineDict.THOST_FTDC_OER_NoPosition = '1'
// 资金不够
defineDict.THOST_FTDC_OER_NoDeposit = '2'
// 会员不存在
defineDict.THOST_FTDC_OER_NoParticipant = '3'
// 客户不存在
defineDict.THOST_FTDC_OER_NoClient = '4'
// 合约不存在
defineDict.THOST_FTDC_OER_NoInstrument = '6'
// 没有执行权限
defineDict.THOST_FTDC_OER_NoRight = '7'
// 不合理的数量
defineDict.THOST_FTDC_OER_InvalidVolume = '8'
// 没有足够的历史成交
defineDict.THOST_FTDC_OER_NoEnoughHistoryTrade = '9'
// 未知
defineDict.THOST_FTDC_OER_Unknown = 'a'

typedefDict.TThostFtdcExecResultType = 'char'

// TFtdcStrikeSequenceType是一个执行序号类型
typedefDict.TThostFtdcStrikeSequenceType = 'int'

// TFtdcStrikeTimeType是一个执行时间类型
typedefDict.TThostFtdcStrikeTimeType = 'string'

// TFtdcCombinationTypeType是一个组合类型类型
// 期货组合
defineDict.THOST_FTDC_COMBT_Future = '0'
// 垂直价差BUL
defineDict.THOST_FTDC_COMBT_BUL = '1'
// 垂直价差BER
defineDict.THOST_FTDC_COMBT_BER = '2'
// 跨式组合
defineDict.THOST_FTDC_COMBT_STD = '3'
// 宽跨式组合
defineDict.THOST_FTDC_COMBT_STG = '4'
// 备兑组合
defineDict.THOST_FTDC_COMBT_PRT = '5'
// 时间价差组合
defineDict.THOST_FTDC_COMBT_CLD = '6'

typedefDict.TThostFtdcCombinationTypeType = 'char'

// TFtdcOptionRoyaltyPriceTypeType是一个期权权利金价格类型类型
// 昨结算价
defineDict.THOST_FTDC_ORPT_PreSettlementPrice = '1'
// 开仓价
defineDict.THOST_FTDC_ORPT_OpenPrice = '4'

typedefDict.TThostFtdcOptionRoyaltyPriceTypeType = 'char'

// TFtdcBalanceAlgorithmType是一个权益算法类型
// 不计算期权市值盈亏
defineDict.THOST_FTDC_BLAG_Default = '1'
// 计算期权市值亏损
defineDict.THOST_FTDC_BLAG_IncludeOptValLost = '2'

typedefDict.TThostFtdcBalanceAlgorithmType = 'char'

// TFtdcActionTypeType是一个执行类型类型
// 执行
defineDict.THOST_FTDC_ACTP_Exec = '1'
// 放弃
defineDict.THOST_FTDC_ACTP_Abandon = '2'

typedefDict.TThostFtdcActionTypeType = 'char'

// TFtdcForQuoteStatusType是一个询价状态类型
// 已经提交
defineDict.THOST_FTDC_FQST_Submitted = 'a'
// 已经接受
defineDict.THOST_FTDC_FQST_Accepted = 'b'
// 已经被拒绝
defineDict.THOST_FTDC_FQST_Rejected = 'c'

typedefDict.TThostFtdcForQuoteStatusType = 'char'

// TFtdcValueMethodType是一个取值方式类型
// 按绝对值
defineDict.THOST_FTDC_VM_Absolute = '0'
// 按比率
defineDict.THOST_FTDC_VM_Ratio = '1'

typedefDict.TThostFtdcValueMethodType = 'char'

// TFtdcExecOrderPositionFlagType是一个期权行权后是否保留期货头寸的标记类型
// 保留
defineDict.THOST_FTDC_EOPF_Reserve = '0'
// 不保留
defineDict.THOST_FTDC_EOPF_UnReserve = '1'

typedefDict.TThostFtdcExecOrderPositionFlagType = 'char'

// TFtdcExecOrderCloseFlagType是一个期权行权后生成的头寸是否自动平仓类型
// 自动平仓
defineDict.THOST_FTDC_EOCF_AutoClose = '0'
// 免于自动平仓
defineDict.THOST_FTDC_EOCF_NotToClose = '1'

typedefDict.TThostFtdcExecOrderCloseFlagType = 'char'

// TFtdcProductTypeType是一个产品类型类型
// 期货
defineDict.THOST_FTDC_PTE_Futures = '1'
// 期权
defineDict.THOST_FTDC_PTE_Options = '2'

typedefDict.TThostFtdcProductTypeType = 'char'

// TFtdcCZCEUploadFileNameType是一个郑商所结算文件名类型
// ^\d{8}_zz_\d{4}
defineDict.THOST_FTDC_CUFN_CUFN_O = 'O'
// ^\d{8}成交表
defineDict.THOST_FTDC_CUFN_CUFN_T = 'T'
// ^\d{8}单腿持仓表new
defineDict.THOST_FTDC_CUFN_CUFN_P = 'P'
// ^\d{8}非平仓了结表
defineDict.THOST_FTDC_CUFN_CUFN_N = 'N'
// ^\d{8}平仓表
defineDict.THOST_FTDC_CUFN_CUFN_L = 'L'
// ^\d{8}资金表
defineDict.THOST_FTDC_CUFN_CUFN_F = 'F'
// ^\d{8}组合持仓表
defineDict.THOST_FTDC_CUFN_CUFN_C = 'C'
// ^\d{8}保证金参数表
defineDict.THOST_FTDC_CUFN_CUFN_M = 'M'

typedefDict.TThostFtdcCZCEUploadFileNameType = 'char'

// TFtdcDCEUploadFileNameType是一个大商所结算文件名类型
// ^\d{8}_dl_\d{3}
defineDict.THOST_FTDC_DUFN_DUFN_O = 'O'
// ^\d{8}_成交表
defineDict.THOST_FTDC_DUFN_DUFN_T = 'T'
// ^\d{8}_持仓表
defineDict.THOST_FTDC_DUFN_DUFN_P = 'P'
// ^\d{8}_资金结算表
defineDict.THOST_FTDC_DUFN_DUFN_F = 'F'
// ^\d{8}_优惠组合持仓明细表
defineDict.THOST_FTDC_DUFN_DUFN_C = 'C'
// ^\d{8}_持仓明细表
defineDict.THOST_FTDC_DUFN_DUFN_D = 'D'
// ^\d{8}_保证金参数表
defineDict.THOST_FTDC_DUFN_DUFN_M = 'M'
// ^\d{8}_期权执行表
defineDict.THOST_FTDC_DUFN_DUFN_S = 'S'

typedefDict.TThostFtdcDCEUploadFileNameType = 'char'

// TFtdcSHFEUploadFileNameType是一个上期所结算文件名类型
// ^\d{4}_\d{8}_\d{8}_DailyFundChg
defineDict.THOST_FTDC_SUFN_SUFN_O = 'O'
// ^\d{4}_\d{8}_\d{8}_Trade
defineDict.THOST_FTDC_SUFN_SUFN_T = 'T'
// ^\d{4}_\d{8}_\d{8}_SettlementDetail
defineDict.THOST_FTDC_SUFN_SUFN_P = 'P'
// ^\d{4}_\d{8}_\d{8}_Capital
defineDict.THOST_FTDC_SUFN_SUFN_F = 'F'

typedefDict.TThostFtdcSHFEUploadFileNameType = 'char'

// TFtdcCFFEXUploadFileNameType是一个中金所结算文件名类型
// ^\d{4}_SG\d{1}_\d{8}_\d{1}_Trade
defineDict.THOST_FTDC_CFUFN_SUFN_T = 'T'
// ^\d{4}_SG\d{1}_\d{8}_\d{1}_SettlementDetail
defineDict.THOST_FTDC_CFUFN_SUFN_P = 'P'
// ^\d{4}_SG\d{1}_\d{8}_\d{1}_Capital
defineDict.THOST_FTDC_CFUFN_SUFN_F = 'F'
// ^\d{4}_SG\d{1}_\d{8}_\d{1}_OptionExec
defineDict.THOST_FTDC_CFUFN_SUFN_S = 'S'

typedefDict.TThostFtdcCFFEXUploadFileNameType = 'char'

// TFtdcCombDirectionType是一个组合指令方向类型
// 申请组合
defineDict.THOST_FTDC_CMDR_Comb = '0'
// 申请拆分
defineDict.THOST_FTDC_CMDR_UnComb = '1'

typedefDict.TThostFtdcCombDirectionType = 'char'

// TFtdcLockTypeType是一个锁定方向类型
// 锁定
defineDict.THOST_FTDC_LCKT_Lock = '1'
// 解锁
defineDict.THOST_FTDC_LCKT_Unlock = '2'

typedefDict.TThostFtdcLockTypeType = 'char'

// TFtdcBizTypeType是一个业务类型类型
// 期货
defineDict.THOST_FTDC_BZTP_Future = '1'
// 证券
defineDict.THOST_FTDC_BZTP_Stock = '2'

typedefDict.TThostFtdcBizTypeType = 'char'

// TFtdcDesignateTypeType是一个指定类型类型
// 指定登记
defineDict.THOST_FTDC_DSTP_Register = '1'
// 指定撤销
defineDict.THOST_FTDC_DSTP_Cancel = '2'

typedefDict.TThostFtdcDesignateTypeType = 'char'

// TFtdcFreezeReasonTypeType是一个冻结原因类型
// 初始化
defineDict.THOST_FTDC_FRTP_Init = '1'
// 锁定
defineDict.THOST_FTDC_FRTP_Lock = '2'
// 执行
defineDict.THOST_FTDC_FRTP_Exec = '3'
// 仓位校验
defineDict.THOST_FTDC_FRTP_Check = '4'
// E+1日执行冻结
defineDict.THOST_FTDC_FRTP_ExecFreeze = '5'

typedefDict.TThostFtdcFreezeReasonTypeType = 'char'

// TFtdcFreezeTypeType是一个冻结类型类型
// 冻结
defineDict.THOST_FTDC_FZTP_Freeze = '1'
// 解冻
defineDict.THOST_FTDC_FZTP_Unfreeze = '2'
// 强制执行
defineDict.THOST_FTDC_FZTP_Force = '3'

typedefDict.TThostFtdcFreezeTypeType = 'char'

// TFtdcTradeSystemTypeType是一个交易系统类型类型
// 未知系统
defineDict.THOST_FTDC_TSTP_Unknow = '0'
// 期货系统
defineDict.THOST_FTDC_TSTP_Future = '1'
// 个股系统
defineDict.THOST_FTDC_TSTP_IShare = '2'

typedefDict.TThostFtdcTradeSystemTypeType = 'char'

// TFtdcStockDisposalTypeType是一个证券处置方向类型
// 划入经纪公司账户
defineDict.THOST_FTDC_STPT_ToBroker = '1'
// 划入投资者账户
defineDict.THOST_FTDC_STPT_ToInvestor = '2'

typedefDict.TThostFtdcStockDisposalTypeType = 'char'

// TFtdcStockDisposalSysIDType是一个证券处置编号类型
typedefDict.TThostFtdcStockDisposalSysIDType = 'string'

// TFtdcStockDisposalStatusType是一个证券处置状态类型
// 已经提交
defineDict.THOST_FTDC_SDPS_Submitted = 'a'
// 已经接受
defineDict.THOST_FTDC_SDPS_Accepted = 'b'
// 已经被拒绝
defineDict.THOST_FTDC_SDPS_Rejected = 'c'
// 已经被撤销
defineDict.THOST_FTDC_SDPS_Cancelled = 'd'

typedefDict.TThostFtdcStockDisposalStatusType = 'char'

// TFtdcInstructionRightTypeType是一个指令权限类型类型
// 限价单
defineDict.THOST_FTDC_ISTR_Limit = '1'
// 限价全额成交否则取消
defineDict.THOST_FTDC_ISTR_Limit_FOK = '2'
// 市价订单剩余转限价
defineDict.THOST_FTDC_ISTR_Market_RemainLimit = '3'
// 市价订单剩余撤销
defineDict.THOST_FTDC_ISTR_Market_FAK = '4'
// 市价全额成交否则取消
defineDict.THOST_FTDC_ISTR_Market_FOK = '5'
// 证券锁定
defineDict.THOST_FTDC_ISTR_Lock = '6'
// 证券解锁
defineDict.THOST_FTDC_ISTR_Unlock = '7'

typedefDict.TThostFtdcInstructionRightTypeType = 'char'

// TFtdcLevelTypeType是一个投资者分级类型类型
// 一级投资者
defineDict.THOST_FTDC_IVLV_FirstLevel = '1'
// 二级投资者
defineDict.THOST_FTDC_IVLV_SecondLevel = '2'
// 三级投资者
defineDict.THOST_FTDC_IVLV_ThirdLevel = '3'

typedefDict.TThostFtdcLevelTypeType = 'char'

module.exports = {
  defineDict,
  typedefDict
}
