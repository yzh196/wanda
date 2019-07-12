define({
 
    // ȫͼĬ�ϱ���
    // backgroundColor: 'rgba(0,0,0,0)',
     
    // Ĭ��ɫ��
    color: ['#ed9678','#e7dac9','#cb8e85','#f3f39d','#c8e49c',
            '#f16d7a','#f3d999','#d3758f','#dcc392','#2e4783',
            '#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889',
            '#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6'],
     
    // ֵ��
    dataRange: {
 
        color:['#cb8e85','#e7dac9'],//��ɫ 
        //text:['��','��'],         // �ı���Ĭ��Ϊ��ֵ�ı�
        textStyle: {
 
            color: '#333'          // ֵ��������ɫ
         
}
     
},
 
 
    // ����ͼĬ�ϲ���
    bar: {
 
        barMinHeight: 0,          // ��С�߶ȸ�Ϊ0
        // barWidth: null,        // Ĭ������Ӧ
        barGap: '30%',            // ������룬Ĭ��Ϊ���ο�ȵ�30%������̶�ֵ
        barCategoryGap : '20%',   // ��Ŀ�����ξ��룬Ĭ��Ϊ��Ŀ����20%������̶�ֵ
        itemStyle: {
 
            normal: {
 
                // color: '����',
                barBorderColor: '#fff',       // ��������
                barBorderRadius: 0,           // ��������Բ�ǣ���λpx��Ĭ��Ϊ0
                barBorderWidth: 1,            // ���������߿���λpx��Ĭ��Ϊ1
                label: {
 
                    show: false
                    // position: Ĭ������Ӧ��ˮƽ����Ϊ'top'����ֱ����Ϊ'right'����ѡΪ
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                 
}
             
},
            emphasis: {
 
                // color: '����',
                barBorderColor: 'rgba(0,0,0,0)',   // ��������
                barBorderRadius: 0,                // ��������Բ�ǣ���λpx��Ĭ��Ϊ0
                barBorderWidth: 1,                 // ���������߿���λpx��Ĭ��Ϊ1
                label: {
 
                    show: false
                    // position: Ĭ������Ӧ��ˮƽ����Ϊ'top'����ֱ����Ϊ'right'����ѡΪ
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                 
}
             
}
         
}
     
},
 
    // ����ͼĬ�ϲ���
    line: {
 
        itemStyle: {
 
            normal: {
 
                // color: ����,
                label: {
 
                    show: false
                    // position: Ĭ������Ӧ��ˮƽ����Ϊ'top'����ֱ����Ϊ'right'����ѡΪ
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                 
},
                lineStyle: {
 
                    width: 2,
                    type: 'solid',
                    shadowColor : 'rgba(0,0,0,0)', //Ĭ��͸��
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3
                 
}
             
},
            emphasis: {
 
                // color: ����,
                label: {
 
                    show: false
                    // position: Ĭ������Ӧ��ˮƽ����Ϊ'top'����ֱ����Ϊ'right'����ѡΪ
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                 
}
             
}
         
},
        //smooth : false,
        //symbol: null,         // �յ�ͼ������
        symbolSize: 2,          // �յ�ͼ�δ�С
        //symbolRotate : null,  // �յ�ͼ����ת����
        showAllSymbol: false    // ��־ͼ��Ĭ��ֻ��������ʾ���������ǩ������ز��ԣ�
     
},
     
    // K��ͼĬ�ϲ���
    k: {
 
        // barWidth : null          // Ĭ������Ӧ
        // barMaxWidth : null       // Ĭ������Ӧ 
        itemStyle: {
 
            normal: {
 
                color: '#fe9778',          // ���������ɫ
                color0: '#e7dac9',      // ���������ɫ
                lineStyle: {
 
                    width: 1,
                    color: '#f78766',   // ���߱߿���ɫ
                    color0: '#f1ccb8'   // ���߱߿���ɫ
                 
}
             
},
            emphasis: {
 
                // color: ����,
                // color0: ����
             
}
         
}
     
},
 
    // ��ͼĬ�ϲ���
    pie: {
 
        center : ['50%', '50%'],    // Ĭ��ȫ�־���
        radius : [0, '75%'],
        clockWise : false,          // Ĭ����ʱ��
        startAngle: 90,
        minAngle: 0,                // ��С�Ƕȸ�Ϊ0
        selectedOffset: 10,         // ѡ��������ƫ����
        itemStyle: {
 
            normal: {
 
                // color: ����,
                borderColor: '#fff',
                borderWidth: 1,
                label: {
 
                    show: true,
                    position: 'outer',
                  textStyle: {
color: '#1b1b1b'
},
                  lineStyle: {
color: '#1b1b1b'
}
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                 
},
                labelLine: {
 
                    show: true,
                    length: 20,
                    lineStyle: {
 
                        // color: ����,
                        width: 1,
                        type: 'solid'
                     
}
                 
}
             
}
         
}
     
},
     
    map: {
 
        mapType: 'china',   // ��ʡ��mapType��ʱ��������
        mapLocation: {
 
            x : 'center',
            y : 'center'
            // width    // ����Ӧ
            // height   // ����Ӧ
         
},
        showLegendSymbol : true,       // ��ʾͼ����ɫ��ʶ��ϵ�б�ʶ��СԲ�㣩������legendʱ��Ч
        itemStyle: {
 
            normal: {
 
                // color: ����,
                borderColor: '#fff',
                borderWidth: 1,
                areaStyle: {
 
                    color: '#ccc'//rgba(135,206,250,0.8)
                 
},
                label: {
 
                    show: false,
                    textStyle: {
 
                        color: 'rgba(139,69,19,1)'
                     
}
                 
}
             
},
            emphasis: {
                 // Ҳ��ѡ����ʽ
                // color: ����,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
 
                    color: '#f3f39d'
                 
},
                label: {
 
                    show: false,
                    textStyle: {
 
                        color: 'rgba(139,69,19,1)'
                     
}
                 
}
             
}
         
}
     
},
     
    force : {
 
        itemStyle: {
 
            normal: {
 
                // color: ����,
                label: {
 
                    show: false
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                 
},
                nodeStyle : {
 
                    brushType : 'both',
                    strokeColor : '#a17e6e'
                 
},
                linkStyle : {
 
                    strokeColor : '#a17e6e'
                 
}
             
},
            emphasis: {
 
                // color: ����,
                label: {
 
                    show: false
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                 
},
                nodeStyle : {
 
},
                linkStyle : {
 
}
             
}
         
}
     
},
 
    gauge : {
 
        axisLine: {
            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {
       // ����lineStyle����������ʽ
                color: [[0.2, '#ed9678'],[0.8, '#e7dac9'],[1, '#cb8e85']], 
                width: 8
             
}
         
},
        axisTick: {
            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :12,        // ����length�����߳�
            lineStyle: {
       // ����lineStyle����������ʽ
                color: 'auto'
             
}
         
},
        axisLabel: {
           // �������ı���ǩ�����axis.axisLabel
            textStyle: {
       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
             
}
         
},
        splitLine: {
           // �ָ���
            length : 18,         // ����length�����߳�
            lineStyle: {
       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
             
}
         
},
        pointer : {
 
            length : '90%',
            color : 'auto'
         
},
        title : {
 
            textStyle: {
       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
             
}
         
},
        detail : {
 
            textStyle: {
       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
             
}
         
}
     
}
 
});