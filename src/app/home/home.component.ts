import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
  methods: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: Category[] = [
    {
      id: 'array',
      title: '数组方法',
      description: '处理数组的常用方法，如过滤、映射、排序等',
      icon: '📊',
      route: '/array',
      color: '#4f46e5',
      methods: ['chunk', 'compact', 'concat', 'difference', 'drop', 'flatten', 'intersection', 'union']
    },
    {
      id: 'collection',
      title: '集合方法',
      description: '处理集合（数组和对象）的方法',
      icon: '🗂️',
      route: '/collection',
      color: '#ec4899',
      methods: ['countBy', 'each', 'every', 'filter', 'find', 'groupBy', 'includes', 'keyBy']
    },
    {
      id: 'function',
      title: '函数方法',
      description: '函数相关的方法，如节流、防抖、柯里化等',
      icon: '⚙️',
      route: '/function',
      color: '#f59e0b',
      methods: ['debounce', 'throttle', 'curry', 'memoize', 'once', 'after', 'before', 'partial']
    },
    {
      id: 'lang',
      title: '语言方法',
      description: '类型检查、比较等语言相关方法',
      icon: '🔤',
      route: '/lang',
      color: '#10b981',
      methods: ['isEqual', 'clone', 'cloneDeep', 'isNumber', 'isString', 'isObject', 'isEmpty', 'isNil']
    },
    {
      id: 'math',
      title: '数学方法',
      description: '数学计算相关方法',
      icon: '🧮',
      route: '/math',
      color: '#ef4444',
      methods: ['add', 'ceil', 'floor', 'max', 'min', 'round', 'sum', 'mean']
    },
    {
      id: 'number',
      title: '数字方法',
      description: '数字处理相关方法',
      icon: '🔢',
      route: '/number',
      color: '#8b5cf6',
      methods: ['clamp', 'inRange', 'random']
    },
    {
      id: 'object',
      title: '对象方法',
      description: '对象处理相关方法',
      icon: '📝',
      route: '/object',
      color: '#06b6d4',
      methods: ['assign', 'get', 'set', 'has', 'keys', 'values', 'pick', 'omit']
    },
    {
      id: 'string',
      title: '字符串方法',
      description: '字符串处理相关方法',
      icon: '📄',
      route: '/string',
      color: '#f97316',
      methods: ['camelCase', 'capitalize', 'deburr', 'kebabCase', 'lowerCase', 'snakeCase', 'trim', 'truncate']
    },
    {
      id: 'util',
      title: '工具方法',
      description: '其他实用工具方法',
      icon: '🛠️',
      route: '/util',
      color: '#6366f1',
      methods: ['times', 'uniqueId', 'attempt', 'noop', 'range', 'escape', 'unescape']
    }
  ];
}
