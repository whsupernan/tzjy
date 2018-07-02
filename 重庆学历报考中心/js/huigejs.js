$(function () {
    //2017���Ѹ���
    //��jsֻ����¶�������   �����ܼ��޹ص�js���Ǹ���2�£�
   // ��js�ǻԸ��Ǹ�α�ٷ���ҳ��js  �����ǽ�ɱ�����ǵ����ʱ��ĵڶ��� Ҳ����+1 ��ʼ�����ǵ���ʱ���ǰ����
        var mydate = new Date();
        $(".month").html(mydate.getMonth() + 1)
        $(".day").html(mydate.getDate() + 1)
        $(".day02").html(mydate.getDate()-2)
        $(".month02").html(mydate.getMonth()+1)
        //  ����ʱjs����  ���뱣֤html�г��˵���ʱ������û�б��class��month����day��Ԫ��
        //�����1��  month02  day02��ǰ�ߵ����� �ǵ�ǰ����
        if (mydate.getMonth() == 0 && mydate.getDate() == 31) {
            $(".month").html(1);
            $(".day").html(2);
        }
        //�����2��
        if (mydate.getMonth() == 1 && mydate.getDate() == 28) {
            $(".month").html(3);
            $(".day").html(1);
        }
        //�����3��
        if (mydate.getMonth() == 2 && mydate.getDate() == 31) {
            $(".month").html(4);
            $(".day").html(2);
        }
        //�����4��
        if (mydate.getMonth() == 3 && mydate.getDate() == 30) {
            $(".month").html(5);
            $(".day").html(2);
        }
        //�����5��
        if (mydate.getMonth() == 4 && mydate.getDate() == 31) {
            $(".month").html(6);
            $(".day").html(1);
        }
        //�����6��
        if (mydate.getMonth() == 5 && mydate.getDate() == 30) {
            $(".month").html(7);
            $(".day").html(1);
        }
        //�����7��
        if (mydate.getMonth() == 6 && mydate.getDate() == 30) {
            $(".month").html(8);
            $(".day").html(1);
        }
        //�����8��
        if (mydate.getMonth() == 7 && mydate.getDate() == 31) {
            $(".month").html(9);
            $(".day").html(1);
        }
        //�����9��
        if (mydate.getMonth() == 8 && mydate.getDate() == 30) {
            $(".month").html(10);
            $(".day").html(1);
        }
        //�����10��
        if (mydate.getMonth() == 9 && mydate.getDate() == 31) {
            $(".month").html(11);
            $(".day").html(1);
        }
        //�����11��
        if (mydate.getMonth() == 10 && mydate.getDate() == 30) {
            $(".month").html(12);
            $(".day").html(1);
        }
        //�����12��
        if (mydate.getMonth() ==11 && mydate.getDate() == 31) {
            $(".month").html(1);
            $(".day").html(1);
        }



    //  �����Ƕ�����ǰ���������ڵ��ж�
        if (mydate.getDate() == 1) {
            //������1��1��
            if (mydate.getMonth() == 0) {
                $(".month02").html(12);
                $(".day02").html(30);
            }
            //������2��1��
            if (mydate.getMonth() == 1) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������3��1��
            if (mydate.getMonth() == 2) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(27);
            }
            //������4��1��
            if (mydate.getMonth() == 3) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������5��1��
            if (mydate.getMonth() == 4) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(29);
            }
            //������6��1��
            if (mydate.getMonth() == 5) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������7��1��
            if (mydate.getMonth() == 6) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������8��1��
            if (mydate.getMonth() == 7) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������9��1��
            if (mydate.getMonth() == 8) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������10��1��
            if (mydate.getMonth() == 9) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(29);
            }
            //������11��1��
            if (mydate.getMonth() == 10) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������12��1��
            if (mydate.getMonth() == 11) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(29);
            }
        } else if (mydate.getDate() == 2) {
            //������1��2��
            if (mydate.getMonth() == 0) {
                $(".month02").html(12);
                $(".day02").html(31);
            }
            //������2��2��
            if (mydate.getMonth() == 1) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(31);
            }
            //������3��2��
            if (mydate.getMonth() == 2) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(28);
            }
            //������4��2��
            if (mydate.getMonth() == 3) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(31);
            }
            //������5��2��
            if (mydate.getMonth() == 4) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������6��2��
            if (mydate.getMonth() == 5) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(31);
            }
            //������7��2��
            if (mydate.getMonth() == 6) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������8��2��
            if (mydate.getMonth() == 7) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(31);
            }
            //������9��2��
            if (mydate.getMonth() == 8) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(31);
            }
            //������10��2��
            if (mydate.getMonth() == 9) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
            //������11��2��
            if (mydate.getMonth() == 10) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(31);
            }
            //������12��2��
            if (mydate.getMonth() == 11) {
                $(".month02").html(mydate.getMonth());
                $(".day02").html(30);
            }
        }
    });