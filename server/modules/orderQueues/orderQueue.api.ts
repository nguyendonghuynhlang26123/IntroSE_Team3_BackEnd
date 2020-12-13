import * as express from 'express';
import { AuthService } from '../auth/auth.service';
import { FoodService } from './../foods/food.service';
import { OrderQueueService } from './orderQueue.service';
const router = express.Router();

const orderQueueService: OrderQueueService = new OrderQueueService();
const foodService: FoodService = new FoodService();
const authService: AuthService = new AuthService();

router.get('/', async (req, res) => {
  let orderQueues = await orderQueueService.findAllOrderQueue();

  res.json(orderQueues);
});

router.get('/:orderQueueId', authService.restrict, async (req, res) => {
  const orderQueue = await orderQueueService.findOrderQueueById(
    req.params.orderQueueId
  );
  res.json(orderQueue);
});

router.post('/', authService.restrict, async (req, res) => {
  const orderQueue = await orderQueueService.createOrderQueue(req.body);
  res.json({ _id: orderQueue.id });
});

router.put('/:orderQueueId', authService.restrict, async (req, res) => {
  const result = await orderQueueService.updateOrderQueue(
    req.params.orderQueueId,
    req.body
  );
  res.json(result);
});

router.put(
  '/update-status/:orderQueueId',
  authService.restrict,
  async (req, res) => {
    const result = await orderQueueService.updateStatusFoodOrderQueue(
      req.params.orderQueueId,
      req.body.foodId,
      req.body.status
    );
    res.json(result);
  }
);

router.delete('/:orderQueueId', authService.restrict, async (req, res) => {
  const result = await orderQueueService.deleteOrderQueue(
    req.params.orderQueueId
  );
  res.json(result);
});

router.delete(
  '/complete/:orderQueueId',
  authService.restrict,
  async (req, res) => {
    const result = await orderQueueService.completeOrderQueue(
      req.params.orderQueueId
    );
    res.json(result);
  }
);

module.exports = router;