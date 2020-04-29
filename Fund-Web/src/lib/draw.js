import F2 from '@antv/f2';
class draw {
  constructor() {
    this.linechart = null;
  }
  line(id, data, again = true, label = '收益趋势', isPresent = false, toFixed = 4) {
    if (!this.linechart || again) {
      if (this.linechart) {
        this.linechart.destroy()
      }
      this.linechart = new F2.Chart({
        id: id,
        pixelRatio: window.devicePixelRatio
      })
    } else {
      this.linechart.clear()
    }
    this.linechart.source(data, {
      y: {
        tickCount: 3,
        formatter: function (val) {
          return `${val.toFixed(toFixed)}${isPresent ? '%' : ''}`
        }
      },
      x: {
        range: [0, 1],
        tickCount: 2
      }
    })
    this.linechart.axis('x', {
      line: null,
      label: function (text, index, total) {
        var textCfg = {};
        if (index === 0) {
          textCfg.textAlign = 'left';
        } else if (index === total - 1) {
          textCfg.textAlign = 'right';
        }
        return textCfg;
      }
    })
    this.linechart.tooltip({
      alwaysShow: true,
      showTitle: true,
      snap: true,
      showCrosshairs: true,
      crosshairsType: 'xy',
      offsetX: 0,
      offsetY: 20,
      crosshairsStyle: {
        stroke: '#EA1337',
        lineDash: [2]
      },
      background: {
        radius: 2,
        fill: '#EA1337',
        padding: [3, 5]
      },
      showItemMarker: false,
      layout: 'vertical',
      tooltipMarkerStyle: {
        fill: '#FFF',
        stroke: '#FFF'
      },
      onShow: function (ev) {
        var items = ev.items;
        items[0].name = label;
      },
      // onChange: function (data) {
      //   callback && callback(data)
      // }
    })
    this.linechart.line().position('x*y').color('#EE5000');
    this.linechart.render()
  }
  pie({
    id,
    data,
    text,
    dom,
    again = true
  }) {
    var map = {};
    data.map(function (obj) {
      map[obj.name] = obj.percent + '%';
    });
    this.piechart = new F2.Chart({
      id: id,
      width: dom.clientWidth,
      pixelRatio: window.devicePixelRatio,
      padding: [0, 'auto', 0, 0]
    })
    this.piechart.source(data, {
      percent: {
        formatter: function formatter(val) {
          return val + '%';
        }
      }
    })
    this.piechart.tooltip(false)
    this.piechart.coord('polar', {
      transposed: true,
      innerRadius: 0.7,
      radius: 0.85
    })
    this.piechart.legend({
      position: 'right',
      marker: 'square',
      itemFormatter: function itemFormatter(val) {
        let standard = 4;
        let length = 20;
        length -= (val.length - standard) * 4 - (val.length - standard) * 0.5
        length -= map[val].length
        return val + ' '.repeat(length) + map[val];
      }
    })
    this.piechart.axis(false)
    this.piechart
      .interval()
      .position('a*percent')
      .color('name', [
        '#FFA300',
        '#00BCFA',
        '#FF0000',
        '#00CC39',
        '#3584F5',
        '#F03958'
      ])
      .adjust('stack')
    this.piechart
      .guide()
      .html({
        position: ['50%', '45%'],
        html: `
          <div style="
            width: 100px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            margin-top: 8px;
            font-size: 11px;">
              <div>${text}</div>
          </div>`
      })
    this.piechart.render()
  }
}
export default new draw()
