const defaultPrefixCls = "eightui";
export function usePrefixCls(suffixCls: string) {
  return `${defaultPrefixCls}-${suffixCls}`;
}
