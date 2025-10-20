import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import _ from 'lodash';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-array',
  standalone: true,
  imports: [
    RouterLink,
    JsonPipe
  ],
  templateUrl: './array.component.html',
  styleUrl: './array.component.css'
})
export class ArrayComponent {
  // 示例数据
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  messyArray = [0, 1, false, 2, '', 3, null, undefined, 4];
  nestedArray = [1, [2, [3, [4]], 5]];

  // 方法示例
  chunkExample = _.chunk(this.numbers, 3);
  compactExample = _.compact(this.messyArray);
  flattenExample = _.flatten(this.nestedArray);
  differenceExample = _.difference([1, 2, 3, 4], [2, 4]);
}
