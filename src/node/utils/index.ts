import os from "os";
import path from "path";
import { JS_TYPES_RE, HASH_RE, QUERY_RE } from '../constants'

export function slash(p: string): string {
  return p.replace(/\\/g, "/");
}

export const isWindows = os.platform() === "win32";

// 统一路径为 / 分割
export function normalizePath(id: string): string {
  return path.posix.normalize(isWindows ? slash(id) : id);
}

export function isJSRequest(id: string): boolean {
  id = cleanUrl(id);
  // js ts jsx tsx 文件
  if (JS_TYPES_RE.test(id)) {
    return true;
  }
  // 纯路径请求 /src/App 有匹配机制进行 ext 匹配
  if (!path.extname(id) && !id.endsWith("/")) {
    return true;
  }
  return false;
}

// 去除 query(?) hash(#) 确保 path 干净
export function cleanUrl(url: string): string {
 return  url.replace(HASH_RE, "").replace(QUERY_RE, "");
}
